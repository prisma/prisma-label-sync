import { commonLabels, scope } from './labels'
import { Repo } from '../labelsync-wrapper'

export const repos: Repo[] = [
  {
    name: 'cloud',
    destroyUnknownLabels: true,
    labels: [
      ...commonLabels,
      scope('github', 'Related to GitHub integration somehow'),
    ],
  },
]
