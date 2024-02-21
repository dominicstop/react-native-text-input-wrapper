import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RNITextInputWrapperViewProps } from './RNITextInputWrapper.types';

const NativeView: React.ComponentType<RNITextInputWrapperViewProps> =
  requireNativeViewManager('RNITextInputWrapper');

export default function RNITextInputWrapperView(props: RNITextInputWrapperViewProps) {
  return <NativeView {...props} />;
}
