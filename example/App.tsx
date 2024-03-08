import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { TextInputWrapperView } from "react-native-text-input-wrapper";


function TextInputTestItems(){
  return (
    <React.Fragment>
      <TextInputWrapperView
        style={styles.exampleItem}
        pasteConfiguration={[
          'public.text',
          'public.image',
        ]}
        onPaste={({nativeEvent}) => {
          console.log(
            "onPaste event - nativeEvent", nativeEvent,
          );
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Write something..."
        />
      </TextInputWrapperView>
      <TextInputWrapperView
        style={styles.exampleItem}
        pasteConfiguration={[
          'public.text',
          'public.image',
        ]}
        editMenuDefaultActions={[
          'define',
          'paste',
        ]}
        onPaste={({nativeEvent}) => {
          console.log(
            "onPaste event - nativeEvent", nativeEvent,
          );
        }}
      >
        <TextInput
          style={styles.textInput}
          placeholder="Write something..."
        />
      </TextInputWrapperView>
    </React.Fragment>
  );
};

export default function App() {
  const [
    shouldMountContent,
    setShouldMountContent
  ] = React.useState(true);

  const buttonPrefix = shouldMountContent
    ? "Unmount"
    : "Mount";

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity 
        style={[
          styles.button,
          styles.exampleItem
        ]}
        onPress={() => {
          setShouldMountContent(prevValue => !prevValue);
        }}
      >
        <Text style={styles.buttonLabel}>
          {`${buttonPrefix} Content`}
        </Text>
      </TouchableOpacity>
      {shouldMountContent && (
        <TextInputTestItems/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputWrapper: {
  },
  exampleItem: {
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 10,
  },
  buttonLabel: {
    fontSize: 16,
  },
  textInput: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.05)',
    overflow: 'hidden',
    borderRadius: 10,
  },
});
