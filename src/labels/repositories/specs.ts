// import { common } from '../common/prisma2'
import { colors } from '../common/prisma2'
import { reduceAreas } from '../../utils'
import { RepositoryConfig } from 'label-sync-core'

const areas: string[] = [ 
  'area/schema',
  'area/cli',
  'area/studio',
  'area/photon',
  'area/photonjs',
  'area/photongo',
  'area/lift',
  'area/introspection',
  'area/sdk',
  'area/query-engine',
  'area/migration-engine',
  'area/introspection-engine', 
  'area/binaries',
  'area/connector',
  'area/vscode-prisma',
  'area/generator',
  'area/capabilities',
  
  'area/spec-infra',
  'area/spec-meta',
  'area/process',
  
  'area/missing'
]

export const specs: RepositoryConfig = {
  labels: {
    // ...common, // no common labels for specs
    
    // status
    'status/1-needs-info': { color: colors.status },
    'status/2-wait-for-spec': { color: colors.status },
    'status/3-spec-in-progress': { color: colors.status },
    
    // when
    'when/build-before-ga': { color: colors.priority },
    'when/clarify-before-ga': { color: colors.priority },
    'when/far-future': { color: colors.priority },
    
    // process
    'process/candidate': { 
      color: colors.process,
      description: 'candidate for the next milestone',
    },
    'process/next-milestone': { 
      color: colors.process,
      description: 'issue earmarked for next milestone',
    },
    
    // kind
    'kind/research': {
      color: colors.kind,
      description: 'Research',
    },
    'kind/spec': {
      color: colors.kind,
      description: 'Something about an actual spec (file)',
    },
    'kind/discussion': {
      color: colors.kind,
      description: 'Discussion about if and how something should be written down in a spec',
    },
    'kind/meta': {
      color: colors.kind,
      description: 'Meta things',
    },
    'kind/other': {
      color: colors.kind,
      description: '?',
    },
    
    // spec
    'spec/new': { 
      color: 'd4c5f9',
      description: 'A new spec should be created',
    },
    'spec/change': { 
      color: 'd4c5f9',
      description: 'An existing spec should be changed or adapted',
    },
    'spec/clarify': { 
      color: 'd4c5f9',
      description: 'An existing spec should be clarified',
    },
    
    // special
    'engineering/blocked': { 
      color: 'b60205',
      description: 'This open issue is blocking work in Engineering',
    },
    
    ...reduceAreas(areas),
  },
  strict: true,
}
