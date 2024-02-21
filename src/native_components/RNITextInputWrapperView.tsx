/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View, LayoutChangeEvent } from 'react-native';

import { RNITextInputWrapperNativeView } from './RNITextInputWrapperNativeView';
// import { RNITextInputWrapperViewModule } from './RNITextInputWrapperViewModule';
import type { RNITextInputWrapperViewProps } from './RNITextInputWrapperViewTypes';


export class RNITextInputWrapperView extends React.PureComponent<RNITextInputWrapperViewProps> {
  
  nativeRef?: View;
  reactTag?: number;

  componentWillUnmount(){
    // this.notifyOnComponentWillUnmount(false);
  };

  getNativeRef: () => View | undefined = () => {
    return this.nativeRef;
  };

  getNativeReactTag: () => number | undefined = () => {
    // @ts-ignore
    return this.nativeRef?.nativeTag ?? this.reactTag
  };

  notifyOnComponentWillUnmount = async (isManuallyTriggered: boolean = true) => {
    // const reactTag = this.getNativeReactTag();
    // if(typeof reactTag !== 'number') return;

    // await RNITextInputWrapperViewModule.notifyOnComponentWillUnmount(
    //   reactTag, 
    //   isManuallyTriggered
    // );
  };

  // Event Handlers
  // --------------

  private _handleOnLayout = ({nativeEvent}: LayoutChangeEvent) => {
    // @ts-ignore
    this.reactTag = nativeEvent.target;
  };

  private _handleOnNativeRef = (ref: View) => {
    this.nativeRef = ref;
  };

  render(){
    return React.createElement(RNITextInputWrapperNativeView, {
      ...this.props,
      ...((this.reactTag == null) && {
        onLayout: this._handleOnLayout,
      }),
      // @ts-ignore
      ref: this._handleOnNativeRef,
      style: [
        this.props.style,
        styles.nativeView
      ],
    });
  };
};

const styles = StyleSheet.create({
  nativeView: {
  },
});