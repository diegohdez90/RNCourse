import { Button, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function GoalInput({
  goal,
  onChangeGoalText,
  onAddGoal
}) {
  return (
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
