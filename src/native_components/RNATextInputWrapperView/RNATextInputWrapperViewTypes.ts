import { ViewProps } from "react-native";
// import { RNATextInputWrapperNativeViewProps } from './RNATextInputWrapperNativeViewTypes';

// TBA
// export type RNATextInputWrapperViewInheritedProps = Pick<RNATextInputWrapperNativeViewProps,
//  | 'onPaste'
// >;

export type RNATextInputWrapperViewBaseProps = {
  // TBA
};

// prettier-ignore
export type RNATextInputWrapperViewProps =
  // & RNATextInputWrapperViewInheritedProps
  & RNATextInputWrapperViewBaseProps
  & ViewProps;
