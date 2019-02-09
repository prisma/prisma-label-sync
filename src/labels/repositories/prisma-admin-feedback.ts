import { common } from '../common'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = [
  'area/details-section',
  'area/engine',
  'area/limbo-state',
  'area/query-editor-section',
  'area/query-sidebar',
  'area/results-section',
  'area/ui-ux',
]

export const prismaAdminFeedback: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
