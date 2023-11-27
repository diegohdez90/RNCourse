import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.textInput}
          placeholder='Type your goal'
        />
        <Button title='Add goal' />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 2,
    width: '80%',
    marginEnd: 8,
    padding: 4
  }
});
