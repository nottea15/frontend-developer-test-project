import { StyleSheet } from 'react-native'

import colors from '../../theme/colors'

export default StyleSheet.create({
  list: {
    backgroundColor: colors.background.contrast,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderColor: colors.card.border,
    borderWidth: 1,
  },
  circleCompleted: {
    backgroundColor: 'green'
  },
  flex: {
    flex: 1,
  }
})
