import { common } from '../common/prisma1'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas = [
  'area/bootstrapping',
  'area/cli',
  'area/config',
  'area/docs',
  'area/generation',
  'area/language-reason',
  'area/language-typescript',
  'area/plugin',
  'area/scaffolding',
  'area/template',
]

export const graphqlgen: RepositoryConfig = {
  labels: {
    ...common,
    ...reduceAreas(areas),
  },
  strict: true,
}
