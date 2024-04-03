import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable } from 'app/ds'
import colors from 'app/theme/colors'

export const ProjectItemView: React.FC<{
  project: Project
  onPress: (project: Project) => void
  active: boolean
}> = ({ project, onPress, active }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(project), [onPress, project])}>
      <Card
        my={4}
        style={
          active
            ? {
                borderColor: colors.card.borderSelected,
                backgroundColor: colors.card.backgroundSelected
              }
            : { borderColor: colors.card.border }
        }
      >
        <Text typeface='default/14' color='default' mb={2}>
          {project.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {project.description}
        </Text>
      </Card>
    </Pressable>
  )
}
