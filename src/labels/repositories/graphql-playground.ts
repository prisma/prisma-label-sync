import { common } from '../common'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = [
  'area/autocompletion',
  'area/build',
  'area/electron/linux',
  'area/electron/macos',
  'area/electron/windows',
  'area/history',
  'area/package/electron',
  'area/package/graphqlbin',
  'area/package/mw-express',
  'area/package/mw-hapi',
  'area/package/mw-koa',
  'area/package/mw-lambda',
  'area/package/react',
  'area/query',
  'area/readme',
  'area/result',
  'area/schema-view',
  'area/subscriptions',
  'area/variables',
]

export const graphqlPlayground: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
