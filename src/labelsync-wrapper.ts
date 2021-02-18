import {
  Label as LabeLabelSyncLabel,
  Repository,
} from 'label-sync/dist/generator'
import { LabelSyncConfig } from 'label-sync/dist/make'

export interface Repo {
  name: string
  destroyUnknownLabels: boolean
  labels: Label[]
}

export interface Label {
  name: string
  color: string
  description?: string
  alias?: string[]
  siblings?: string[]
}

export function toLabelSyncConfig(wrapperRepos: Repo[]): LabelSyncConfig {
  const repos = wrapperRepos.reduce((repos, wrapperRepo) => {
    repos[wrapperRepo.name] = toLabelSyncRepo(wrapperRepo)
    return repos
  }, {} as LabelSyncConfig['repos'])

  return {
    repos,
  }
}

function toLabelSyncRepo(wrapperRepo: Repo): LabelSyncConfig['repos'][0] {
  const repo = new Repository({
    config: {
      removeUnconfiguredLabels: wrapperRepo.destroyUnknownLabels,
    },
    labels: wrapperRepo.labels.map(
      ({ name, color, description, alias, siblings }) => {
        return new LabeLabelSyncLabel({
          color: color,
          name: name,
          description: description ?? '',
          alias: alias,
          siblings: siblings,
        })
      },
    ),
  })

  return repo
}
