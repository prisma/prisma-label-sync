import { repo } from 'label-sync'
import { common } from '../common/prisma2'

export const prisma2Private = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [...common],
})
