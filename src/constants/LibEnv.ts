import { Platform } from 'react-native';

// @ts-ignore
export const IOS_VERSION = parseInt(Platform.Version, 10);

export const IS_PLATFORM_IOS = (Platform.OS === 'ios');
export const IS_PLATFORM_ANDROID = (Platform.OS === 'android');

export const LIB_ENV = {
  shouldEnableLogging: false,
};