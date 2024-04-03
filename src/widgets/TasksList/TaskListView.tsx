import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'
import { Task } from 'app/types/Task'

import { Header } from 'app/ds'

import { TaskItemView } from './TaskItemView'
import styles from './TaskListView.styles'

export const TaskListView: React.FC<{
  tasks: Task[]
  onTaskPress: (project: Task) => void
  listTitle: string
}> = ({ tasks, onTaskPress, listTitle}) => {
  const renderItem = ({ item }: { item: Task }) => (
    <TaskItemView task={item} onPress={onTaskPress} />
  )

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{listTitle}</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
