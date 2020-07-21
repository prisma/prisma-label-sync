import { repo } from 'label-sync'

import { common } from '../common/prisma2'

export const prismaClientGo = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [...common],
})
