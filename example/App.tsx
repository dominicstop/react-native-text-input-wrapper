import { StyleSheet, TextInput, View } from "react-native";
import { TextInputWrapperView } from "react-native-text-input-wrapper";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <TextInputWrapperView
        style={styles.textInputWrapper}
        renderTextInput={() => (
          <TextInput
            style={styles.textInput}
            placeholder="Write something..."
          />
        )}
      />
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
  textInputWrapper: {},
  textInput: {},
});
