import * as React from 'react';

import { RNITextInputWrapperViewProps } from './RNITextInputWrapper.types';

export default function RNITextInputWrapperView(props: RNITextInputWrapperViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
