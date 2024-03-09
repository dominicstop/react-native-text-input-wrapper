import { requireNativeViewManager } from "expo-modules-core";

import type { RNITextInputWrapperNativeViewProps } from "./RNITextInputWrapperNativeViewTypes";
import { IS_PLATFORM_IOS } from "../../constants/LibEnv";

export const RNITextInputWrapperNativeView: React.ComponentType<RNITextInputWrapperNativeViewProps> | undefined = (() => {
  if(!IS_PLATFORM_IOS) return undefined;
  return requireNativeViewManager("RNITextInputWrapperView");
})();