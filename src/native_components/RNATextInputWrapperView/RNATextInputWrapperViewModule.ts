import { requireNativeModule } from "expo-modules-core";
import { IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from "../../constants/LibEnv";

interface RNATextInputWrapperViewModuleType {
  // TBA
};

export const RNATextInputWrapperViewModule: RNATextInputWrapperViewModuleType | undefined = (() => {
  if(!IS_PLATFORM_ANDROID) return undefined;
  return requireNativeModule("RNATextInputView");
})();
  