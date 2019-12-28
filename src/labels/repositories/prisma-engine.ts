import { repository, label } from 'label-sync'

import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'

const areas: string[] = []

export const prismaEngine = repository({
  labels: {
    ...common,

    // special
    'component: migration engine': label({
      color: 'ffff00', // yellow
      description: 'Migration Engine',
    }),
    'component: query engine': label({
      color: 'ff0000', // red
      description: 'Query Engine',
    }),
    'component: introspection engine': label({
      color: '008000', // green
      description: 'Introspection Engine',
    }),
    'component: data model parser': label({
      color: '0000FF', // blue
      description: 'Data Model Parser',
    }),

    ...reduceAreas(areas),
  },
  strict: true,
})
