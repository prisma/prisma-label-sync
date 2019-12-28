import { repository } from 'label-sync'

import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'

const areas: string[] = []

export const prisma2 = repository({
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: false, // do not remove existing labels that are not listed above
})
