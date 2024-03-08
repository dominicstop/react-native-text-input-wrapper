import { StyleSheet, TextInput, View } from "react-native";
import { TextInputWrapperView } from "react-native-text-input-wrapper";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <TextInputWrapperView
        style={styles.textInputWrapper}
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
        style={styles.textInputWrapper}
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
    marginBottom: 16,
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
