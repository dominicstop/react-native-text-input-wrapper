import { NativeSyntheticEvent } from "react-native";


export type RNITextInputWrapperOnPasteEventObject = NativeSyntheticEvent<{
  type: "text";
  value: string;
} | {
  type: "image";
  fileName: string;
  fileExtension: string;
  filePath: string;
}>;

export type RNITextInputWrapperOnPasteEvent = (
  event: RNITextInputWrapperOnPasteEventObject
) => void;