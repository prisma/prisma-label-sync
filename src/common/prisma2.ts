import { label } from 'label-sync'
import { Label } from 'label-sync/dist/generator'

export const colors = {
  area: 'FFD700',
  kind: '3B5BDB',
  status: 'F8F9FA',
  bug: 'ee0000',
  team: 'FDF4E8',
  process: 'EB9100',
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
    name: 'team/product',
    color: colors.team,
    description: 'Issue for team Product.',
  }),
  label({
    name: 'team/engines',
    color: colors.team,
    description: 'Issue for team Engines.',
  }),
  label({
    name: 'team/typescript',
    color: colors.team,
    description: 'Issue for team TypeScript.',
  }),
  label({
    name: 'team/webdev',
    color: colors.team,
    description: 'Issue for team Webdev.',
  }),
  label({
    name: 'team/support',
    color: colors.team,
    description: 'Issue for team Support.',
  }),
  label({
    name: 'team/devrel',
    color: colors.team,
    description: 'Issue for team Devrel.',
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
]
