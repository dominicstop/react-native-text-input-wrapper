import { requireNativeViewManager } from "expo-modules-core";

import type { RNITextInputWrapperNativeViewProps } from "./RNITextInputWrapperNativeViewTypes";

export const RNITextInputWrapperNativeView: React.ComponentType<RNITextInputWrapperNativeViewProps> =
  requireNativeViewManager("RNITextInputWrapperView");
