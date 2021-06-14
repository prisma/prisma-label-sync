import { colors, common } from '../common/prisma2'
import { label } from 'label-sync'
import { repo } from 'label-sync'

export const prismaClientGo = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [
    ...common,
    label({
      name: 'tech/go',
      color: colors.tech,
      description: 'Issue for tech Go.',
      alias: ["team/go"],
    })
  ],
})
