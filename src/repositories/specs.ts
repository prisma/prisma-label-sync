import { repo, label } from 'label-sync'
import { area } from '../labels'
import { colors } from '../common/prisma2'

const areas = [
  'area/schema',
  'area/cli',
  'area/studio',
  'area/prisma-client',
  'area/prisma-client-js',
  'area/prisma-client-go',
  'area/migrate',
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
  'area/errors',

  'area/spec-infra',
  'area/spec-meta',
  'area/process',

  'area/missing',
].map(area)

export const specs = repo({
  config: {
    removeUnconfiguredLabels: true,
  },
  labels: [
    // ...common, // no common labels for specs

    // status
    label('status/1-needs-info', colors.status),
    label('status/2-wait-for-spec', colors.status),
    label('status/3-spec-in-progress', colors.status),

    // when
    label('when/build-before-ga', colors.priority),
    label('when/clarify-before-ga', colors.priority),
    label('when/far-future', colors.priority),

    // process
    label({
      name: 'process/candidate',
      color: colors.process,
      description: 'candidate for the next milestone',
    }),
    label({
      name: 'process/next-milestone',
      color: colors.process,
      description: 'issue earmarked for next milestone',
    }),

    // kind
    label({
      name: 'kind/research',
      color: colors.kind,
      description: 'Research',
    }),
    label({
      name: 'kind/spec',
      color: colors.kind,
      description: 'Something about an actual spec (file)',
    }),
    label({
      name: 'kind/discussion',
      color: colors.kind,
      description:
        'Discussion about if and how something should be written down in a spec',
    }),
    label({
      name: 'kind/meta',
      color: colors.kind,
      description: 'Meta things',
    }),
    label({ name: 'kind/other', color: colors.kind, description: '?' }),

    // spec
    label({
      name: 'spec/new',
      color: 'd4c5f9',
      description: 'A new spec should be created',
    }),
    label({
      name: 'spec/change',
      color: 'd4c5f9',
      description: 'An existing spec should be changed or adapted',
    }),
    label({
      name: 'spec/clarify',
      color: 'd4c5f9',
      description: 'An existing spec should be clarified',
    }),

    // special
    label({
      name: 'engineering/blocked',
      color: 'b60205',
      description: 'This open issue is blocking work in Engineering',
    }),

    label({
      name: 'keep',
      color: '0e8a16',
      description: '',
    }),
    
    ...areas,
  ],
})
