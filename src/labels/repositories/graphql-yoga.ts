import { common } from '../common/prisma1'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = ['area/readme']

export const graphqlYoga: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
    'released': { color: '#ededed' },
  },
  strict: true,
}
