/* eslint-disable @typescript-eslint/no-useless-constructor */

import React from "react";
import { StyleSheet } from "react-native";

import type { TextInputWrapperViewProps } from "./TextInputWrapperViewTypes";
import { RNITextInputWrapperView } from "../../native_components";

const NATIVE_ID_KEYS = {
  textInput: "textInput",
};

export class TextInputWrapperView extends React.PureComponent<TextInputWrapperViewProps> {

  nativeRef!: RNITextInputWrapperView;

  // Lifecycle
  // ---------

  constructor(props: TextInputWrapperViewProps){
    super(props);
  };

  componentWillUnmount(): void {
    this.nativeRef.notifyOnComponentWillUnmount();
  };

  // Internal Functions
  // ------------------

  private getProps = () => {
    const { ...viewProps } = this.props;

    return {
      // A. Group native props for `RNITextInputWrapperView`...
      nativeProps: {
        // TBA
      },

      // B. Move all the default view-related
      //    props here...
      viewProps,
    };
  };

  // Render
  // -----
  
  render(){
    const props = this.getProps();

    return (
      <RNITextInputWrapperView
        {...props.viewProps}
        {...props.nativeProps}
        ref={(r) => {
          this.nativeRef = r!;
        }}
        style={[styles.nativeView, props.viewProps.style]}
      >
        {/** TBA */}
      </RNITextInputWrapperView>
    );
  };
};

const styles = StyleSheet.create({
  nativeView: {
    // TBA
  },
});
