import ExpoModulesCore
import React
import DGSwiftUtilities


fileprivate enum NativeIDKey: String {
  case textInput;
};

public class RNITextInputWrapperView: ExpoView {

  // MARK: - Properties
  // -------------------

  weak var baseTextInputView: RCTBaseTextInputView?;
  var wrappedTextInput: RNIWrappedTextInput?;
  
  var _didSwizzle = false;
  
  // MARK: - Event Props
  // -------------------
  
  let onPasteEvent = EventDispatcher("onPaste");
  
  // MARK: - Lifecycle
  // -----------------
  
  public override func insertReactSubview(_ subview: UIView!, at atIndex: Int) {
    super.insertReactSubview(subview, at: atIndex);
    
    guard let nativeID = subview.nativeID,
          let nativeIDKey = NativeIDKey(rawValue: nativeID),
          nativeIDKey == .textInput,
          
          let baseTextInputView = subview as? RCTBaseTextInputView
    else { return };
    
    self.baseTextInputView = baseTextInputView;
    
    switch baseTextInputView.backedTextInputView {
      case let textField as RCTUITextField:
        self.wrappedTextInput = .init(textField: textField);
        textField.pasteConfiguration = pasteConfiguration;
        self._swizzleIfNeeded();

      case let textView as RCTUITextView:
        self.wrappedTextInput = .init(textView: textView);
        textView.pasteConfiguration = pasteConfiguration;
        self._swizzleIfNeeded();
        
      default:
        break;
    };
    
  };
  
  // MARK: - Handler Functions
  // -------------------------
  
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
  
  // MARK: - Internal Functions
  // --------------------------
  func _swizzleIfNeeded(){
    guard !self._didSwizzle,
          let wrappedTextInput = self.wrappedTextInput
    else { return };
    
    self._didSwizzle = true;
  
    switch wrappedTextInput {
      case let .textField(textField):
        guard let textField = textField.ref else { return };
        
        
      case let .textView(textView):
        guard let textView = textView.ref else { return };
        
        SwizzlingHelpers.swizzlePaste(forTextView: textView) { originalImp, selector in
          /// This the new imp that will replace the `paste` method in
          /// `textView`
          return { _self, sender in
            
            // Call the original implementation.
            originalImp(_self, selector, sender);
            self.paste(sender);
          };
        };
    };
  };
};
