import { common, colors } from '../common/prisma2'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const studio: RepositoryConfig = {
  labels: {
    ...common,    
  },
  strict: false,
}
