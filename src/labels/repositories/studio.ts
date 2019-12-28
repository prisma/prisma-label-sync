import { repository, label } from 'label-sync'
import { common, colors } from '../common/prisma2'
import { remove } from '../../utils'

const areas: string[] = []

export const studio = repository({
  labels: remove(
    {
      ...common,

      // effort
      'effort/high': label({
        color: '5fd8a4',
        description: 'This will require significant effort to implement',
      }),
      'effort/low': label({
        color: '5fd8a4',
        description: 'This will not require much effort to implement',
      }),

      // impact
      'impact/high': label({
        color: '916ff7',
        description: 'The impact or potential impact is high',
      }),
      'impact/low': label({
        color: '916ff7',
        description: 'The impact or potential impact is low',
      }),

      // process
      'process/needs-design': label({
        color: colors.process,
        description:
          'This issue needs a concept or design before being actionable',
      }),
    },
    ['process/candidate', 'process/next-milestone'],
  ),
  strict: true,
})
