import { common } from '../common/prisma2'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const studio: RepositoryConfig = {
  labels: {
    ...common,
    
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
    
  },
  strict: true,
}
