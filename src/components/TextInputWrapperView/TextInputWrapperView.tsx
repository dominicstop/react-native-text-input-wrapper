/* eslint-disable @typescript-eslint/no-useless-constructor */

import React from "react";
import { StyleSheet, TextInputProps } from "react-native";

import type { TextInputWrapperViewProps } from "./TextInputWrapperViewTypes";
import { RNITextInputWrapperView } from "../../native_components/RNITextInputWrapperView";
import { IS_PLATFORM_ANDROID, IS_PLATFORM_IOS } from "../../constants/LibEnv";
import { RNATextInputWrapperView } from "../../native_components/RNATextInputWrapperView";

const NATIVE_ID_KEYS = {
  textInput: "textInput",
};

export class TextInputWrapperView extends React.PureComponent<TextInputWrapperViewProps> {

  nativeRefIOS!: RNITextInputWrapperView;
  nativeRefAndroid!: RNATextInputWrapperView;

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

    if(IS_PLATFORM_IOS){
      return (
        <RNITextInputWrapperView
          {...props.viewProps}
          {...props.nativeProps}
          ref={(r) => {
            this.nativeRefIOS = r!;
          }}
          style={[styles.nativeView, props.viewProps.style]}
          onPaste={this.props.onPaste}
        >
          {childrenWithProps}
        </RNITextInputWrapperView>
      );
    };

    if(IS_PLATFORM_ANDROID){
      <RNATextInputWrapperView
        {...props.viewProps}
        {...props.nativeProps}
        ref={(r) => {
          this.nativeRefAndroid = r!;
        }}
        style={[styles.nativeView, props.viewProps.style]}
      >
        {childrenWithProps}
      </RNATextInputWrapperView>
    };
    
    return undefined;
  }
}

const styles = StyleSheet.create({
  nativeView: {
    // TBA
  },
});
