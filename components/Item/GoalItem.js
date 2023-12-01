import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function GoalItem(
  itemGoal
) {
  return (
    <View key={itemGoal.index} style={styles.goalItem}>
      <Text style={styles.goalItemText}>{itemGoal.item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
