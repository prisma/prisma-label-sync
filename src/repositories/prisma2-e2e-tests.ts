import { repo } from 'label-sync'
import { common } from '../common/prisma2'

export const prisma2E2eTests = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [...common],
})
