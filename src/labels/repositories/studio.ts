import { common, colors } from '../common/prisma2'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

const commonModified = JSON.parse(JSON.stringify(common))
delete commonModified['process/candidate']
delete commonModified['process/next-milestone']

export const studio: RepositoryConfig = {
  labels: {
    ...commonModified,
    
    // effort 
    'effort/high': { 
      color: '5fd8a4',
      description: 'This will require significant effort to implement',
    },
    'effort/low': { 
      color: '5fd8a4',
      description: 'This will not require much effort to implement',
    },
    
    // impact 
    'impact/high': { 
      color: '916ff7',
      description: 'The impact or potential impact is high',
    },
    'impact/low': { 
      color: '916ff7',
      description: 'The impact or potential impact is low',
    },
    
    // process
    'process/needs-design': { 
      color: colors.process,
      description: 'This issue needs a concept or design before being actionable',
    },
    
  },
  strict: true,
}
