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
        <View style={styles.actions}>
          <Button
            title='Add goal'
            onPress={onAddGoalHandler}
          />
          <Button
            title='Cancel'
            onPress={onToggleModal}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    gap: 8,
    margin: 16,
    padding: 8
  },
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 2,
    width: '100%',
    marginEnd: 8,
    padding: 8
  },
  actions: {
    flexDirection: 'row',
    gap: 16
  }
});
