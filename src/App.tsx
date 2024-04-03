import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'
import { TaskListView } from './widgets/TasksList'
import { Task } from './types/Task'

function App() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS)
  const [activeProjectName, setActiveProjectName] = useState<string>('')

  const onProjectPress = useCallback(
    (project: Project) => {
      if (activeProjectName === project.name) {
        setActiveProjectName('')
      } else {
        setActiveProjectName(project.name)
      }
    },
    [activeProjectName]
  )

  const activeProject = useMemo(() => {
    return projects.find(project => project.name === activeProjectName)
  }, [activeProjectName, projects])

  const tasksToShow = useMemo(() => {
    if (activeProject) {
      return activeProject.tasks
    } else {
      const allTasks = projects.reduce((acc: Task[], currentProject: Project) => {
        return [...acc, ...currentProject.tasks]
      }, [])
      return allTasks
    }
  }, [activeProject, projects])

  const onTaskPress = useCallback(
    (task: Task) => {
      const mappedProject = projects.map(item => ({
        ...item,
        tasks: item.tasks.map(initTask =>
          initTask.name === task.name ? { ...initTask, completed: !initTask.completed } : initTask
        )
      }))
      setProjects(mappedProject)
    },
    [projects]
  )

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView
          activeProject={activeProject}
          projects={PROJECTS}
          onProjectPress={onProjectPress}
        />
      </View>
      <View style={styles.column}>
        <TaskListView
          tasks={tasksToShow}
          onTaskPress={onTaskPress}
          listTitle={activeProject ? `Tasks for ${activeProject.name}` : 'All tasks'}
        />
      </View>
    </View>
  )
}

export default App
