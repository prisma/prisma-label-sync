import { common } from '../common/prisma1'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = ['area/generator']

export const prismaBinding: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
