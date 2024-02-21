import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RNITextInputWrapper.web.ts
// and on native platforms to RNITextInputWrapper.ts
import RNITextInputWrapperModule from './RNITextInputWrapperModule';
import RNITextInputWrapperView from './RNITextInputWrapperView';
import { ChangeEventPayload, RNITextInputWrapperViewProps } from './RNITextInputWrapper.types';

// Get the native constant value.
export const PI = RNITextInputWrapperModule.PI;

export function hello(): string {
  return RNITextInputWrapperModule.hello();
}

export async function setValueAsync(value: string) {
  return await RNITextInputWrapperModule.setValueAsync(value);
}

const emitter = new EventEmitter(RNITextInputWrapperModule ?? NativeModulesProxy.RNITextInputWrapper);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RNITextInputWrapperView, RNITextInputWrapperViewProps, ChangeEventPayload };
