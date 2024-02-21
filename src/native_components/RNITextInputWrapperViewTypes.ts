import { ViewProps } from "react-native";
// import { RNITextInputWrapperNativeViewBaseProps } from './RNITextInputWrapperNativeViewTypes';

// export type RNITextInputWrapperViewInheritedProps = Pick<RNITextInputWrapperNativeViewBaseProps,
//  | 'TBA'
// >;

export type RNITextInputWrapperViewBaseProps = {
  // TBA
};

// prettier-ignore
export type RNITextInputWrapperViewProps =
  // & RNITextInputWrapperViewInheritedProps
  & RNITextInputWrapperViewBaseProps
  & ViewProps;
