import ExpoModulesCore


public class RNITextInputWrapperViewModule: Module {

  public func definition() -> ModuleDefinition {
    Name("RNITextInputWrapperView");

    View(RNITextInputWrapperView.self) {
      // no-op
    };
  };
};
