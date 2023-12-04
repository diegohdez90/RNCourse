import { 
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image
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
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />
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
            color='#18b85d'
          />
          <Button
            title='Cancel'
            onPress={onToggleModal}
            color='#c21818'
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
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    backgroundColor: '#403de7',
    gap: 8,
    padding: 32
  },
  image: {
    width: 100,
    height: 100,
    margin: 24
  },
  textInput: {
    borderColor: '#352f2f',
    borderRadius: 8,
    borderWidth: 2,
    width: '100%',
    padding: 8,
    backgroundColor: '#ece4e4',
    color: '#03009b'
  },
  actions: {
    flexDirection: 'row',
    gap: 16
  }
});
