import { label } from 'label-sync'
import { Label } from 'label-sync/dist/generator'

export const colors = {
  area: 'FFD700',
  kind: '3B5BDB',
  status: 'F8F9FA',
  bug: 'ee0000',
  team: 'FDF4E8',
  tech: 'FDF4E8',
  process: 'EB9100',
  engines: 'fcc7e7',
  // unused
  priority: 'F783AC',
  scope: '27CF79',
  release: 'a5d8ff',
}

export const common: Label[] = [
  label({
    name: 'bug/0-needs-info',
    color: colors.bug,
    description: 'More information is needed for reproduction.',
  }),
  label({
    name: 'bug/1-repro-available',
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
  }),
  label({
    name: 'bug/2-confirmed',
    color: colors.bug,
    description: 'We have confirmed that this is a bug.',
  }),

  label({
    name: 'kind/bug',
    color: colors.kind,
    description: 'A reported bug.',
  }),
  label({
    name: 'kind/regression',
    color: colors.kind,
    description: 'A reported bug in functionality that used to work before.',
  }),
  label({
    name: 'kind/feature',
    color: colors.kind,
    description: 'A request for a new feature.',
  }),
  label({
    name: 'kind/improvement',
    color: colors.kind,
    description: 'An improvement to existing feature and code.',
  }),
  label({
    name: 'kind/tech',
    color: colors.kind,
    description: 'A technical change.',
  }),
  label({
    name: 'kind/docs',
    color: colors.kind,
    description: 'A documentation change is required.',
  }),
  label({
    name: 'kind/discussion',
    color: colors.kind,
    description: 'Discussion is required.',
  }),
  label({
    name: 'kind/question',
    color: colors.kind,
    description: 'Developer asked a question. No code changes required.',
  }),

  label({
    name: 'process/candidate',
    color: colors.process,
    description: 'Candidate for next Milestone.',
  }),
  label({
    name: 'process/next-milestone',
    color: colors.process,
    description: 'Issue earmarked for next Milestone.',
  }),

  label({
    name: 'tech/engines',
    color: colors.tech,
    description: 'Issue for tech Engines.',
    alias: ["team/engines"],
  }),
  label({
    name: 'tech/typescript',
    color: colors.tech,
    description: 'Issue for tech TypeScript.',
    alias: ["team/typescript"],
  }),
  
  label({
    name: 'team/client',
    color: colors.team,
    description: 'Issue for team Client.',
  }),
  label({
    name: 'team/migrations',
    color: colors.team,
    description: 'Issue for team Migrations.',
  }),
  label({
    name: 'team/developer-productivity',
    color: colors.team,
    description: 'Issue for team Developer Productivity.',
  }),
  label({
    name: 'team/support-engineering',
    color: colors.team,
    description: 'Issue for team Support Engineering.',
    alias: ["team/support"],
  }),
  
  label({
    name: 'team/product',
    color: colors.team,
    description: 'Issue for team Product.',
  }),
  label({
    name: 'team/design',
    color: colors.team,
    description: 'Issue for team Design.',
  }),
  label({
    name: 'team/other',
    color: colors.team,
    description: 'Issue for another team that does not fit our nice boxes.',
  }),
  
  label({
    name: 'status/needs-action',
    color: colors.status,
    description: 'Issue has no activity for a long time, needs some action.',
  }),

  label({
    name: 'engines/migration engine',
    color: colors.engines,
    description: 'Issue in the migration engine',
  }),
  label({
    name: 'engines/query engine',
    color: colors.engines,
    description: 'Issue in the query engine',
  }),
  label({
    name: 'engines/introspection engine',
    color: colors.engines,
    description: 'Issue in the introspection engine',
  }),
  label({
    name: 'engines/data model parser',
    color: colors.engines,
    description: 'Issue in the parser for the Prisma schema',
  }),
  label({
    name: 'engines/other',
    color: colors.engines,
    description: 'Issue in the engines repo that does not fit one of the other labels.',
  }),

]
