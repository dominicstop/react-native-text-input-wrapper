import * as React from "react";
import { ViewProps } from "react-native";
import { RNITextInputWrapperViewProps } from "../../native_components";

export type TextInputWrapperViewInheritedProps = Partial<Pick<RNITextInputWrapperViewProps,
  | 'pasteConfiguration'
  | 'onPaste'
>>;

export type TextInputWrapperViewBaseProps = {
  renderTextInput: () => React.JSX.Element;
};

// prettier-ignore
export type TextInputWrapperViewProps =
  & TextInputWrapperViewInheritedProps
  & TextInputWrapperViewBaseProps
  & ViewProps;
