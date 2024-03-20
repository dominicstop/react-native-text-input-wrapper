import { requireNativeViewManager } from "expo-modules-core";

import type { RNATextInputWrapperNativeViewProps } from "./RNATextInputWrapperNativeViewTypes";
import { IS_PLATFORM_ANDROID } from "../../constants/LibEnv";

export const RNATextInputWrapperNativeView: React.ComponentType<RNATextInputWrapperNativeViewProps> | undefined = (() => {
  if(!IS_PLATFORM_ANDROID) return undefined;
  return requireNativeViewManager("RNATextInputView");
})();