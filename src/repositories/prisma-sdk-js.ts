import { repo } from 'label-sync'
import { common } from '../common/prisma2'

export const prismaSdkJs = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [...common],
})
