import { commonLabels } from '../common/labels'
import { Repo } from '../labelsync-wrapper'

export const cloud = {
  name: 'cloud',
  destroyUnknownLabels: true,
  labels: [...commonLabels],
} as Repo
