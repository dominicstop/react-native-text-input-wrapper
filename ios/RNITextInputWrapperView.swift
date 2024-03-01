import ExpoModulesCore
import React
import DGSwiftUtilities


fileprivate enum NativeIDKey: String {
  case textInput;
};

public class RNITextInputWrapperView: ExpoView {

  weak var baseTextInputView: RCTBaseTextInputView?;
  
  let onPasteEvent = EventDispatcher("onPaste");
  
  public override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    super.insertReactSubview(subview, at: atIndex);
    
    guard let nativeID = subview.nativeID,
          let nativeIDKey = NativeIDKey(rawValue: nativeID),
          nativeIDKey == .textInput,
          
          let baseTextInputView = subview as? RCTBaseTextInputView
    else { return };
    
    self.baseTextInputView = baseTextInputView;
    
    let pasteConfiguration = {
      if #available(iOS 14.0, *) {
        return UIPasteConfiguration(acceptableTypeIdentifiers: [
          UTType.text.identifier,
          UTType.image.identifier,
          UTType.gif.identifier,
        ]);
      };
      
      /// List:
      /// https://gist.github.com/rmorey/b8d1b848086bdce026a9f57732a3b858
      ///
      return UIPasteConfiguration(acceptableTypeIdentifiers: [
        "public.text",
        "public.image",
        "com.compuserve.gif",
      ]);
    }();
    
    switch baseTextInputView.backedTextInputView {
      case let textField as RCTUITextField:
        textField.pasteConfiguration = pasteConfiguration;

      case let textView as RCTUITextView:
        textView.pasteConfiguration = pasteConfiguration;
        
        SwizzlingHelpers.swizzlePaste(forTextView: textView) { originalImp, selector in
          /// This the new imp that will replace the `paste` method in
          /// `textView`
          return { _self, sender in
            
            // Call the original implementation.
            originalImp(_self, selector, sender);
            self.paste(sender);
          };
        };
        
      default:
        break;
    };
    
  };
  
  public override func paste(_ sender: Any?) {
    print(
      "RNITextInputWrapperView.paste",
      "sender:", (sender as? NSObject)?.className ?? type(of: sender),
      "\n"
    );
    
    if let image = UIPasteboard.general.image {
      let tempPath = FileManager.default.temporaryDirectory;
      
      let fileName = UUID().uuidString;
      
      let filePath = tempPath
        .appendingPathComponent(fileName)
        .appendingPathExtension("png");
        
      guard let imageData = image.pngData() else { return };
      try? imageData.write(to: tempPath);
      
      self.onPasteEvent.callAsFunction([
        "type": "image",
        "fileName": fileName,
        "fileExtension": filePath.pathExtension,
        "filePath": filePath.absoluteString,
      ]);
    
      print(
        "RNITextInputWrapperView.paste",
        "\n - UIPasteboard.general.image:", image,
        "\n - filePath.absoluteString:", filePath.absoluteString,
        "\n"
      );
    
    } else if let string = UIPasteboard.general.string {
      self.onPasteEvent.callAsFunction([
        "type": "text",
        "value": string,
      ]);
      
      print(
        "RNITextInputWrapperView.paste",
        "\n - UIPasteboard.general.string:", string,
        "\n"
      );
    };
  };
};
