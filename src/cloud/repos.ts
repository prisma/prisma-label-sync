import { groups, scope } from './labels'
import { Repo } from '../labelsync-wrapper'

export const repos: Repo[] = [
  {
    name: 'cloud',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.backendApplication,
      ...groups.frontendApplication,
      scope('github', 'Related to GitHub integration somehow'),
    ],
  },
  {
    name: 'nexus-prisma',
    destroyUnknownLabels: true,
    labels: [...groups.library, ...groups.oss, ...groups.common],
  },
]
