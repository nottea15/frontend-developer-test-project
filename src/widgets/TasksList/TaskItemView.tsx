import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable, View } from 'app/ds'
import colors from 'app/theme/colors'
import { Task } from 'app/types/Task'
import styles from './TaskListView.styles'

export const TaskItemView: React.FC<{
  task: Task
  onPress: (project: Task) => void
}> = ({ task, onPress }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(task), [onPress, task])}>
      <Card my={4}>
        <View style={styles.flexRow}>
          <View style={styles.flex}>
            <Text typeface='default/14' color='default' mb={2}>
              {task.name}
            </Text>
            <Text typeface='default/12' color='dimmed'>
              {task.description}
            </Text>
          </View>
          <View style={[styles.circle, task.completed && styles.circleCompleted]} />
        </View>
      </Card>
    </Pressable>
  )
}
