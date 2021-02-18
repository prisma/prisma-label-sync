import { commonLabels } from './labels'
import { Repo, toLabelSyncConfig } from '../labelsync-wrapper'

export const repos: Repo[] = [
  {
    name: 'cloud',
    destroyUnknownLabels: true,
    labels: [...commonLabels],
  },
]
