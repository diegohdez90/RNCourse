import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import GoalInput from './components/Input/GoalInput';
import GoalItem from './components/Item/GoalItem';

export default function App() {
  const [open, setOpen] = useState(false);
  const [goals, setGoals] = useState([])

  const onToggleModal = () => {
    setOpen(prev => !prev);
  }

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

  useEffect(() => {
    setOpen(false);
  }, [goals])

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>      
        <Button
          title='Add Goal'
          color='#2512d0'
          onPress={onToggleModal}
        />
        <GoalInput
          visible={open}
          onAddGoal={onAddGoal}
          onToggleModal={onToggleModal}
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
    </>
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
