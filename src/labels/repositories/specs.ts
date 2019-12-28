import { repository, label } from 'label-sync'
// import { common } from '../common/prisma2'
import { colors } from '../common/prisma2'
import { reduceAreas } from '../../utils'

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
  'area/errors',

  'area/spec-infra',
  'area/spec-meta',
  'area/process',

  'area/missing',
]

export const specs = repository({
  labels: {
    // ...common, // no common labels for specs

    // status
    'status/1-needs-info': label(colors.status),
    'status/2-wait-for-spec': label(colors.status),
    'status/3-spec-in-progress': label(colors.status),

    // when
    'when/build-before-ga': label(colors.priority),
    'when/clarify-before-ga': label(colors.priority),
    'when/far-future': label(colors.priority),

    // process
    'process/candidate': label({
      color: colors.process,
      description: 'candidate for the next milestone',
    }),
    'process/next-milestone': label({
      color: colors.process,
      description: 'issue earmarked for next milestone',
    }),
    'process/product': label({
      color: colors.process,
      description:
        'Temporary label to export products issues from the Engineering process',
    }),

    // kind
    'kind/research': label({
      color: colors.kind,
      description: 'Research',
    }),
    'kind/spec': label({
      color: colors.kind,
      description: 'Something about an actual spec (file)',
    }),
    'kind/discussion': label({
      color: colors.kind,
      description:
        'Discussion about if and how something should be written down in a spec',
    }),
    'kind/meta': label({
      color: colors.kind,
      description: 'Meta things',
    }),
    'kind/other': label({
      color: colors.kind,
      description: '?',
    }),

    // spec
    'spec/new': label({
      color: 'd4c5f9',
      description: 'A new spec should be created',
    }),
    'spec/change': label({
      color: 'd4c5f9',
      description: 'An existing spec should be changed or adapted',
    }),
    'spec/clarify': label({
      color: 'd4c5f9',
      description: 'An existing spec should be clarified',
    }),

    // special
    'engineering/blocked': label({
      color: 'b60205',
      description: 'This open issue is blocking work in Engineering',
    }),

    ...reduceAreas(areas),
  },
  strict: true,
})
