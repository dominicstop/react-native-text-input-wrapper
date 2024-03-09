import { requireNativeModule } from "expo-modules-core";
import { IS_PLATFORM_IOS } from "../../constants/LibEnv";

interface RNITextInputWrapperViewModuleType {
  // TBA
};

export const RNITextInputWrapperViewModule: RNITextInputWrapperViewModuleType | undefined = (() => {
  if(!IS_PLATFORM_IOS) return undefined;
  return requireNativeModule("RNITextInputWrapperView");
})();
  