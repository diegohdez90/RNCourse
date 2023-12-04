import { 
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function GoalInput({
  visible,
  onAddGoal,
  onToggleModal
}) {
  const [goal, setGoal] = useState('');

  const onChangeGoalText = (v) => {
    setGoal(v)
  }

  const onAddGoalHandler = () => {
    onAddGoal(goal);
    onToggleModal();``
  }

  useEffect(() => {
    setGoal('');
  }, [onAddGoal])

  return (
    <Modal
      visible={visible}
      animationType='slide'
    >
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
          onPress={onAddGoalHandler}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
});
