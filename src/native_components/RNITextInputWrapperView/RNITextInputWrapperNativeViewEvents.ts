import { NativeSyntheticEvent } from "react-native";


export type RNITextInputWrapperOnPasteEventPayloadBase = {
  senderType: string;
  type: string;
  typeExtensionString: string;
  name: string;
  hasColors: boolean;
  hasImages: boolean;
  hasStrings: boolean;
  hasURLs: boolean;
  isPersistent: boolean;
  changeCount: number;
  numberOfItems: number;
};

export type RNITextInputWrapperOnPasteEventPayloadIntersection = {
  inferredType: "text";
  value: string;
} | {
  inferredType: "data";
  fileName: string;
  fileExtension: string;
  filePath: string;
};

export type RNITextInputWrapperOnPasteEventPayload =
    RNITextInputWrapperOnPasteEventPayloadBase
  & RNITextInputWrapperOnPasteEventPayloadIntersection;

export type RNITextInputWrapperOnPasteEventObject =  
  NativeSyntheticEvent<RNITextInputWrapperOnPasteEventPayload>;

export type RNITextInputWrapperOnPasteEvent = (
  event: RNITextInputWrapperOnPasteEventObject
) => void;