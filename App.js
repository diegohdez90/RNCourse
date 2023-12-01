import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([])

  const onChangeGoalText = (v) => {
    setGoal(v)
  }

  const onAddGoal = () => {
    setGoals(prev => [...prev, goal])
  }

  useEffect(() => {
    setGoal('');
    console.log('goals', goals);
  },[goals]);

  return (
    <View style={styles.container}>
      <View
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.textInput}
          placeholder='Type your goal'
          value={goal}
          onChangeText={onChangeGoalText}
        />
        <Button
          title='Add goal'
          onPress={onAddGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {
            goals.map((itemGoal, indexGoal) => <View key={indexGoal.toString()} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{itemGoal}</Text>
            </View>)
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 2,
    width: '60%',
    marginEnd: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 3
  },
  goalItem: {
    flexDirection: 'row',
    margin: 4,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  goalItemText: {
    color: 'white'
  }
});
