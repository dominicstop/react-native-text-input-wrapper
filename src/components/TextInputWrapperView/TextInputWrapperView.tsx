/* eslint-disable @typescript-eslint/no-useless-constructor */

import React from "react";
import { StyleSheet, TextInputProps } from "react-native";

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

  // Internal Functions
  // ------------------

  private getProps = () => {
    const { 
      pasteConfiguration,
      editMenuDefaultActions,
      ...viewProps 
    } = this.props;

    return {
      // A. Group native props for `RNITextInputWrapperView`...
      nativeProps: {
        pasteConfiguration,
        editMenuDefaultActions,
      },

      // B. Move all the default view-related
      //    props here...
      viewProps,
    };
  };

  // Render
  // -----

  render() {
    const props = this.getProps();

    const hasChildren = React.Children.count(this.props.children);
    if(hasChildren <= 0) return null;

    const childrenWithProps = React.Children.map(this.props.children, child => {
      if(!React.isValidElement(child)) {
        return child;
      };

      const newProps: TextInputProps = {
        nativeID: NATIVE_ID_KEYS.textInput,
      }; 
      
      return React.cloneElement(child, newProps);
    });
    
    return (
      <RNITextInputWrapperView
        {...props.viewProps}
        {...props.nativeProps}
        ref={(r) => {
          this.nativeRef = r!;
        }}
        style={[styles.nativeView, props.viewProps.style]}
        onPaste={this.props.onPaste}
      >
        {childrenWithProps}
      </RNITextInputWrapperView>
    );
  }
}

const styles = StyleSheet.create({
  nativeView: {
    // TBA
  },
});
