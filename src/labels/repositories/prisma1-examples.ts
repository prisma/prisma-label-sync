import { common } from '../common/prisma1'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const prisma1Examples: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: false,
}
