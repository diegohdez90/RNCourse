import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function GoalInput({
  goal,
  onChangeGoalText,
}) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder='Type your goal'
      value={goal}
      onChangeText={onChangeGoalText}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#666',
    borderRadius: 8,
    borderWidth: 2,
    width: '60%',
    marginEnd: 8,
    padding: 8
  },
});
