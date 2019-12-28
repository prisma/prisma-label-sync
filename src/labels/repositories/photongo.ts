import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'
import { repository } from 'label-sync'

const areas: string[] = []

export const photongo = repository({
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
})
