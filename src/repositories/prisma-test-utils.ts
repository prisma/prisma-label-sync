import { common } from '../common/prisma2'
import { repo } from 'label-sync'

export const prismaTestUtils = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [...common],
})
