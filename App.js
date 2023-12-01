import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/Input/GoalInput';
import GoalItem from './components/Item/GoalItem';

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
  },[goals]);

  return (
    <View style={styles.container}>      
      <GoalInput
        goal={goal}
        onChangeGoalText={onChangeGoalText}
        onAddGoal={onAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={GoalItem}
          keyExtractor={(_, index) => index}
          alwaysBounceVertical={false} /> 
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
  goalsContainer: {
    flex: 3
  },
});
