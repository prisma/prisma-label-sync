import { common, colors } from '../common/prisma2'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

const common = JSON.parse(JSON.stringify(common))

export const studio: RepositoryConfig = {
  labels: {
    ...common,    
  },
  strict: false,
}
