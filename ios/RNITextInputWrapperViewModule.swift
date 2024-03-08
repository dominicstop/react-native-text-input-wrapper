import ExpoModulesCore


public class RNITextInputWrapperViewModule: Module {

  public func definition() -> ModuleDefinition {
    Name("RNITextInputWrapperView");

    View(RNITextInputWrapperView.self) {
      Prop("pasteConfiguration") {
        $0.pasteConfigurationProp = $1;
      };
      
      Prop("editMenuDefaultActions") {
        $0.editMenuDefaultActionsProp = $1;
      };
      
      Events("onPaste");
    };
  };
};
