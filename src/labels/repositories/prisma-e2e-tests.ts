import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const prismaE2eTests: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
