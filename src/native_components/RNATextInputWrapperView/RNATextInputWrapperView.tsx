/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View, LayoutChangeEvent } from 'react-native';

import { RNATextInputWrapperNativeView } from './RNATextInputWrapperNativeView';
import type { RNATextInputWrapperViewProps } from './RNATextInputWrapperViewTypes';
import { IS_PLATFORM_ANDROID } from '../../constants/LibEnv';


export class RNATextInputWrapperView extends React.PureComponent<RNATextInputWrapperViewProps> {
  
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

    // await RNATextInputWrapperViewModule.notifyOnComponentWillUnmount(
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
    if(!IS_PLATFORM_ANDROID) return undefined;

    return React.createElement(RNATextInputWrapperNativeView!, {
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