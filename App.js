import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
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
  }
});
