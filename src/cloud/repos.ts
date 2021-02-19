import { groups, scope } from './labels'
import { Repo } from '../labelsync-wrapper'

export const repos: Repo[] = [
  {
    name: 'cloud',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.scrum,
      ...groups.appBackend,
      ...groups.appFrontend,
      scope('github', 'Related to GitHub integration somehow'),
    ],
  },
  {
    name: 'nexus-prisma',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.scrum,
      ...groups.library,
      ...groups.oss,
    ],
  },
]
