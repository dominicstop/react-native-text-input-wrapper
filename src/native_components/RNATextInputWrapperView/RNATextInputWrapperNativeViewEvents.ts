import { NativeSyntheticEvent } from "react-native";


export type RNATextInputWrapperOnPasteEventPayloadBase = {
  //TBA
};

export type RNATextInputWrapperOnPasteEventPayloadIntersection = {
  inferredType: "text";
  // TBA
} | {
  inferredType: "data";
  // TBA
};

export type RNATextInputWrapperOnPasteEventPayload =
    RNATextInputWrapperOnPasteEventPayloadBase
  & RNATextInputWrapperOnPasteEventPayloadIntersection;

export type RNATextInputWrapperOnPasteEventObject =  
  NativeSyntheticEvent<RNATextInputWrapperOnPasteEventPayload>;

export type RNATextInputWrapperOnPasteEvent = (
  event: RNATextInputWrapperOnPasteEventObject
) => void;