import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const prisma2: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: false, // do not remove existing labels that are not listed above
}
