import { common } from '../common'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = ['area/readme']

export const yoga2: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
