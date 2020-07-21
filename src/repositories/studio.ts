import { repo } from 'label-sync'
import { common, colors } from '../common/prisma2'

export const studio = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [...common],
})
