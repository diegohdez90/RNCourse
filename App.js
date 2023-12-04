import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import GoalInput from './components/Input/GoalInput';
import GoalItem from './components/Item/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([])

  const onAddGoal = (goal) => {
    setGoals(prev => [...prev, {
      id: uuid(),
      goal
    }])
  }

  const onDeleteGoal = (id) => {
    setGoals(prev => {
      return prev.filter(item => item.id !== id);
    });
  }

  return (
    <View style={styles.container}>      
      <GoalInput
        onAddGoal={onAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(item) => <GoalItem
            key={item.index}
            itemGoal={item}
            deleteItem={onDeleteGoal}
          />}
          keyExtractor={(item, _) => item.id}
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
