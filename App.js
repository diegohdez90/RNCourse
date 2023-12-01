import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/Input/GoalInput';
import GoalItem from './components/Item/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([])

  const onAddGoal = (goal) => {
    setGoals(prev => [...prev, goal])
  }

  return (
    <View style={styles.container}>      
      <GoalInput
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
