import ExpoModulesCore


public class RNITextInputWrapperViewModule: Module {

  public func definition() -> ModuleDefinition {
    Name("RNITextInputWrapperView");

    View(RNITextInputWrapperView.self) {
      Prop("pasteConfiguration") {
        $0.pasteConfigurationProp = $1;
      };
      
      Events("onPaste");
    };
  };
};
