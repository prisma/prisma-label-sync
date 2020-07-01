import { common, colors } from '../common/prisma2'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

const commonModified = JSON.parse(JSON.stringify(common))
delete commonModified['process/candidate']
delete commonModified['process/next-milestone']

export const studio: RepositoryConfig = {
  labels: {
    ...commonModified,    
  },
  strict: false,
}
