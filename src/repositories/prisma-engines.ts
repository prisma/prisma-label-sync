import { label, repo } from 'label-sync'
import { common } from '../common/prisma2'

export const prismaEngines = repo({
  config: {
    removeUnconfiguredLabels: false,
  },
  labels: [
    ...common,
    // special
    label({
      name: 'component: migration engine',
      color: 'ffff00', // yellow
      description: 'Migration Engine',
    }),
    label({
      name: 'component: query engine',
      color: 'ff0000', // red
      description: 'Query Engine',
    }),
    label({
      name: 'component: introspection engine',
      color: '008000', // green
      description: 'Introspection Engine',
    }),
    label({
      name: 'component: data model parser',
      color: '0000FF', // blue
      description: 'Data Model Parser',
    }),
  ],
})
