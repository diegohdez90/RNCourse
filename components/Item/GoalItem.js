import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'
import React from 'react'

export default function GoalItem({
  itemGoal,
  deleteItem,
}) {
  const onRemove = () => {
    deleteItem(itemGoal.item.id)
  }
  return (
    <Pressable
      onPress={onRemove}>
      <View
        key={itemGoal.index}
        style={styles.goalItem}>
        <Text style={styles.goalItemText}>{itemGoal.item.goal}</Text>
      </View>
    </Pressable>
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
