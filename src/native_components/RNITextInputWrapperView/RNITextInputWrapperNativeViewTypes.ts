/* eslint-disable prettier/prettier */
import { ViewProps } from "react-native";

import { RNITextInputWrapperOnPasteEvent } from "./RNITextInputWrapperNativeViewEvents";
import { UniformTypeIdentifier } from "../../types/UniformTypeIdentifier";
import { EditMenuDefaultActions } from "../../types/EditMenuDefaultActions";

export type RNITextInputWrapperNativeViewBaseProps = {
  pasteConfiguration: Array<UniformTypeIdentifier> | undefined;
  editMenuDefaultActions: Array<EditMenuDefaultActions> | undefined;
  onPaste: RNITextInputWrapperOnPasteEvent | undefined;
};

export type RNITextInputWrapperNativeViewProps =
  ViewProps & RNITextInputWrapperNativeViewBaseProps;
