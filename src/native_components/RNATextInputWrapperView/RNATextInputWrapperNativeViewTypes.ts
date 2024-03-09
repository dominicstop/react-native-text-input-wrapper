/* eslint-disable prettier/prettier */
import { ViewProps } from "react-native";

import { RNATextInputWrapperOnPasteEvent } from "./RNATextInputWrapperNativeViewEvents";

export type RNATextInputWrapperNativeViewBaseProps = {
  // TBA
  // onPaste: RNATextInputWrapperOnPasteEvent | undefined;
};

export type RNATextInputWrapperNativeViewProps =
  ViewProps & RNATextInputWrapperNativeViewBaseProps;
