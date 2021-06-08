import { Repo } from '../labelsync-wrapper'
import { groups, scope } from './labels'

// prettier-ignore
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
      ...groups.ops,
      scope('github', 'Related to GitHub integration somehow'),
      scope('eslint', 'Related to ESLint config, rules, etc.'),
      scope('studio', 'Related to Prisma Studio'),
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
      ...groups.ops,
      scope('github', 'Related to GitHub integration somehow'),
      scope('eslint', 'Related to ESLint config, rules, etc.'),
    ],
  },
  {
    name: 'lens',
    destroyUnknownLabels: true,
    labels: [
      ...groups.common,
      ...groups.scrum,
      ...groups.library,
      ...groups.appFrontend,
      ...groups.oss,
      scope('website',        'This issue affects the Prisma website'),
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
      ...groups.os,
      scope('eslint',         'Related to ESLint config, rules, etc.'),
      scope('enum',           'Related to Prisma & Nexus enum type'),
      scope('relations',      'Related to Prisma & Nexus relations 1:1, 1:n, etc.'),
      scope('scalars',        'Related to GraphQL scalars, Prisma scalars, etc.'),
      scope('generator',      'Related to the Prisma generator part of Nexus Prisma'),
      scope('configuration',  'Related to configuration of Nexus Prisma generator'),
      scope('jsdoc',          'Related to the generated JSDoc on the generated types'),
      scope('vercel',         'Related to the Vercel deployment environment'),
    ],
  },
]
