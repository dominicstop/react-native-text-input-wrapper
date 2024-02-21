import { ViewProps } from "react-native";

// TBA: TextInputWrapperViewInheritedProps

export type TextInputWrapperViewBaseProps = {
  // TBA
};

// prettier-ignore
export type TextInputWrapperViewProps =
  // & TextInputWrapperViewInheritedProps
  & TextInputWrapperViewBaseProps
  & ViewProps;
