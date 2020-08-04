import { repo } from 'label-sync'

import { common } from '../common/prisma1'
import { area } from '../labels'

const areas = [
  'area/details-section',
  'area/engine',
  'area/limbo-state',
  'area/query-editor-section',
  'area/query-sidebar',
  'area/results-section',
  'area/ui-ux',
].map(area)

export const prismaAdminFeedback = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [...common, ...areas],
})
