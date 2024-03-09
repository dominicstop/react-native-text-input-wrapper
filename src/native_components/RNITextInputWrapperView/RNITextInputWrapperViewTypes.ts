import { ViewProps } from "react-native";
import { RNITextInputWrapperNativeViewProps } from './RNITextInputWrapperNativeViewTypes';

export type RNITextInputWrapperViewInheritedProps = Pick<RNITextInputWrapperNativeViewProps,
  | 'pasteConfiguration'
  | 'editMenuDefaultActions'
  | 'onPaste'
>;

export type RNITextInputWrapperViewBaseProps = {
  // TBA
};

// prettier-ignore
export type RNITextInputWrapperViewProps =
  & RNITextInputWrapperViewInheritedProps
  & RNITextInputWrapperViewBaseProps
  & ViewProps;
