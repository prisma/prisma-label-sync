import { RepositoryConfig, LabelConfig } from 'label-sync-core'
import { colors } from './labels/common/prisma1'

export function reduceAreas(areas: string[]) {
  return areas.reduce((acc, area) => {
    return {
      ...acc,
      [area]: colors.area,
    }
  }, {})
}
export type Index<T> = Record<string, T>

export type RepositoryConfigs = Index<RepositoryConfig>

export type LabelConfigs = Index<LabelConfig>

export type Label = {
  name: string
  color: string
  description?: string
}

type ReposToLabels = Index<Label[]>

/**
 * Map the internal repo-to-labels data representation
 * to what label-sync-core expects.
 */
export const toLabelSync = (repos: ReposToLabels): RepositoryConfigs => {
  return Object.entries(repos).reduce<RepositoryConfigs>(
    (repos, [repoName, labels]) => {
      return {
        ...repos,
        [repoName]: {
          labels: labels.reduce<LabelConfigs>((labels, label) => {
            return {
              ...labels,
              [label.name]: {
                // "#" prefix permits vscode extensions to colorize color values
                color: label.color.replace(/^#(.*)/, '$1'),
                description: label.description,
              },
            }
          }, {}),
        },
      }
    },
    {},
  )
}
