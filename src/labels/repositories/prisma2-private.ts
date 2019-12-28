import { repository } from 'label-sync'

import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'

const areas: string[] = []

export const prisma2Private = repository({
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: false,
})
