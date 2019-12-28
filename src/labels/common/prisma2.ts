import { label } from 'label-sync'

export const colors = {
  area: 'FFD700',
  kind: '3B5BDB',
  status: 'F8F9FA',
  bug: 'ee0000',
  priority: 'F783AC',
  scope: '27CF79',
  team: 'FDF4E8',
  release: 'a5d8ff',
  process: 'EB9100',
}

export const common = {
  /* Bugs */
  'bug/0-needs-info': label({
    color: colors.bug,
    description: 'More information is needed for reproduction.',
  }),
  'bug/1-repro-available': label({
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
  }),
  'bug/2-confirmed': label({
    color: colors.bug,
    description: 'We have confirmed that this is a bug.',
  }),
  /* Kind */
  'kind/bug': label({
    color: colors.kind,
    description: 'A reported bug.',
  }),
  'kind/regression': label({
    color: colors.kind,
    description: 'A reported bug in functionality that used to work before.',
  }),
  'kind/feature': label({
    color: colors.kind,
    description: 'A request for a new feature.',
  }),
  'kind/improvement': label({
    color: colors.kind,
    description: 'An improvement to existing feature and code.',
  }),
  'kind/docs': label({
    color: colors.kind,
    description: 'A documentation change is required.',
  }),
  'kind/discussion': label({
    color: colors.kind,
    description: 'Discussion is required.',
  }),
  'kind/question': label({
    color: colors.kind,
    description: 'Developer asked a question. No code changes required.',
  }),
  /* Process triaging. */
  'process/candidate': label({
    color: colors.process,
    description: 'Candidate for next Milestone.',
  }),
  'process/next-milestone': label({
    color: colors.process,
    description: 'Issue earmarked for next Milestone.',
  }),
  'process/product': label({
    color: colors.process,
    description:
      'Temporary label to export products issues from the Engineering process',
  }),
}
