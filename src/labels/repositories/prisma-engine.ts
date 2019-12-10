import { common } from '../common/prisma2'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = []

export const prismaEngine: RepositoryConfig = {
  labels: {
    ...common,
    
    // special
    'component: migration engine': { 
      color: 'ffff00', // yellow
      description: 'Migration Engine',
    },
    'component: query engine': { 
      color: 'ff0000', // red
      description: 'Query Engine',
    },
    'component: introspection engine': { 
      color: '008000', // green
      description: 'Introspection Engine',
    },
    'component: data model parser': { 
      color: '0000FF', // blue
      description: 'Data Model Parser',
    },
    
    ...reduceAreas(areas),
  },
  strict: true,
}
