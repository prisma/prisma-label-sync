import { repo } from 'label-sync'
import { common } from '../common/prisma1'

export const prisma1Examples = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [...common],
})
