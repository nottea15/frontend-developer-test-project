import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ProjectItemView'
import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  projects: Project[]
  onProjectPress: (project: Project) => void
  activeProject: Project | undefined
}> = ({ projects, onProjectPress, activeProject }) => {
  const renderItem = useCallback(
    ({ item }: { item: Project }) => (
      <ProjectItemView
        project={item}
        active={activeProject?.name === item.name}
        onPress={onProjectPress}
      />
    ),
    [activeProject]
  )

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>Projects</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
