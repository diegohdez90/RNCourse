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
      <View
        style={styles.goalItem}>
        <Pressable
          android_ripple={{
            color: '#bddddd'
          }}
          style={(state) => {
            if (state.pressed) {
              return styles.pressed
            }
          }}
          onPress={onRemove}
        >
          <Text style={styles.goalItemText}>{itemGoal.item.goal}</Text>
        </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#5e0acc',
  },
  pressed: {
    opacity: 0.5
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  }
});
