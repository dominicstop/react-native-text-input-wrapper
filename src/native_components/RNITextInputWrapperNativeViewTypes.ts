/* eslint-disable prettier/prettier */
import { ViewProps } from "react-native";
import { RNITextInputWrapperOnPasteEvent } from "./RNITextInputWrapperNativeViewEvents";

export type RNITextInputWrapperNativeViewBaseProps = {
  onPaste: RNITextInputWrapperOnPasteEvent | undefined;
};

export type RNITextInputWrapperNativeViewProps =
  ViewProps & RNITextInputWrapperNativeViewBaseProps;
