import * as React from "react";
import { ViewProps } from "react-native";

// TBA: TextInputWrapperViewInheritedProps

export type TextInputWrapperViewBaseProps = {
  renderTextInput: () => React.JSX.Element;
};

// prettier-ignore
export type TextInputWrapperViewProps =
  // & TextInputWrapperViewInheritedProps
  & TextInputWrapperViewBaseProps
  & ViewProps;
