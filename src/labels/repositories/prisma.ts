import { common } from '../common'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = [
  'area/admin',
  'area/api',
  'area/brew',
  'area/cli',
  'area/client/flow',
  'area/client/go',
  'area/client/js',
  'area/client/ts',
  'area/client',
  'area/cloud-api',
  'area/config',
  'area/connector/mongo',
  'area/connector/mysql',
  'area/connector/postgres',
  'area/connector',
  'area/console',
  'area/database',
  'area/datamodel',
  'area/deploy',
  'area/docs',
  'area/engine',
  'area/error-handling',
  'area/examples',
  'area/introspection',
  'area/migrations',
  'area/next',
  'area/performance',
  'area/playground',
  'area/prisma',
  'area/schema-generation',
  'area/sdk',
  'area/server',
  'area/subscriptions',
]

export const prisma: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: false,
}
