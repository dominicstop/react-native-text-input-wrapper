import { StyleSheet, Text, View } from 'react-native';

import * as RNITextInputWrapper from 'react-native-text-input-wrapper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RNITextInputWrapper.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
