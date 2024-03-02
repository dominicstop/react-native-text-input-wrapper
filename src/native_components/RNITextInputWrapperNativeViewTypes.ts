/* eslint-disable prettier/prettier */
import { ViewProps } from "react-native";

import { RNITextInputWrapperOnPasteEvent } from "./RNITextInputWrapperNativeViewEvents";
import { UniformTypeIdentifier } from "../types/UniformTypeIdentifier";

export type RNITextInputWrapperNativeViewBaseProps = {
  pasteConfiguration: Array<UniformTypeIdentifier> | undefined;
  onPaste: RNITextInputWrapperOnPasteEvent | undefined;
};

export type RNITextInputWrapperNativeViewProps =
  ViewProps & RNITextInputWrapperNativeViewBaseProps;
