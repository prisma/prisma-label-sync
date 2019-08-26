// import { common } from '../common/prisma2'
import { colors } from '../common/prisma2'
// import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const specs: RepositoryConfig = {
  labels: {
    // ...common,
    'status/1-needs-info': { color: colors.status },
    'status/2-wait-for-spec': { color: colors.status },
    'status/3-spec-in-progress': { color: colors.status },
    'area/photonjs': { color: colors.area },
    'area/lift': { color: colors.area },
    'area/schema': { color: colors.area },
    'area/cli': { color: colors.area },
    'area/introspection': { color: colors.area },
    'area/sdk': { color: colors.area },
    'area/studio': { color: colors.area },
    'area/query-engine': { color: colors.area },
    'area/migration-engine': { color: colors.area },
    'area/spec-infra': { color: colors.area },
    'area/process': { color: colors.area }, 
    'area/connector': { color: colors.area },
    'when/build-before-ga': { color: colors.priority },
    'when/clarify-before-ga': { color: colors.priority },
    'when/far-future': { color: colors.priority },
    'process/candidate': { color: colors.process },
    'process/next-milestone': { color: colors.process },
    // ...reduceAreas(areas),
  },
  strict: true,
}
