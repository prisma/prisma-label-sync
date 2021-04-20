import { Repo } from '../labelsync-wrapper'
import { groups, scope } from './labels'

export const repos: Repo[] = [
  {
    name: 'cloud',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.scrum,
      ...groups.app,
      ...groups.appBackend,
      ...groups.appFrontend,
      scope('github', 'Related to GitHub integration somehow'),
      scope('eslint', 'Related to ESLint config, rules, etc.'),
      scope('studio', 'Related to Prisma Studio'),
    ],
  },
  {
    name: 'cloud-router',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.scrum,
      ...groups.app,
      ...groups.appBackend,
      scope('github', 'Related to GitHub integration somehow'),
      scope('eslint', 'Related to ESLint config, rules, etc.'),
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
      scope('eslint', 'Related to ESLint config, rules, etc.'),
      scope('enum', 'Related to Prisma & Nexus enum type'),
    ],
  },
]
