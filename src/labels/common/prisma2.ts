export const colors = {
  area: 'FFD700',
  kind: '3B5BDB',
  status: 'F8F9FA',
  bug: 'ee0000',
  team: 'FDF4E8',
  process: 'EB9100',
  engines: 'fcc7e7',
  // unused
  priority: 'F783AC',
  scope: '27CF79',
  release: 'a5d8ff',
}

export const common = {
  'bug/0-needs-info': {
    color: colors.bug,
    description: 'More information is needed for reproduction.',
  },
  'bug/1-repro-available': {
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
  },
  'bug/2-confirmed': {
    color: colors.bug,
    description: 'We have confirmed that this is a bug.',
  },

  'kind/bug': {
    color: colors.kind,
    description: 'A reported bug.',
  },
  'kind/regression': {
    color: colors.kind,
    description: 'A reported bug in functionality that used to work before.',
  },
  'kind/feature': {
    color: colors.kind,
    description: 'A request for a new feature.',
  },
  'kind/improvement': {
    color: colors.kind,
    description: 'An improvement to existing feature and code.',
  },
  'kind/docs': {
    color: colors.kind,
    description: 'A documentation change is required.',
  },
  'kind/discussion': {
    color: colors.kind,
    description: 'Discussion is required.',
  },
  'kind/question': {
    color: colors.kind,
    description: 'Developer asked a question. No code changes required.',
  },

  'process/candidate': {
    color: colors.process,
    description: 'Candidate for next Milestone.',
  },
  'process/next-milestone': {
    color: colors.process,
    description: 'Issue earmarked for next Milestone.',
  },

  'team/product': {
    color: colors.team,
    description: 'Issue for team Product.'
  },
  'team/engines': {
    color: colors.team,
    description: 'Issue for team Engines.'
  },
  'team/typescript': {
    color: colors.team,
    description: 'Issue for team TypeScript.'
  },
  'team/webdev': {
    color: colors.team,
    description: 'Issue for team Webdev.'
  },
  'team/support': {
    color: colors.team,
    description: 'Issue for team Support.'
  },
  'team/devrel': {
    color: colors.team,
    description: 'Issue for team Devrel.'
  },
  'team/design': {
    color: colors.team,
    description: 'Issue for team Design.'
  },
  'team/other': {
    color: colors.team,
    description: 'Issue for another team that does not fit our nice boxes.'
  },
  'status/needs-action': {
    color: colors.status,
    description: 'Issue has no activity for a long time, needs some action.'
  },
  'engines/migration engine': {
    color: colors.engines,
    description: 'Issue in the migration engine',
  },
  'engines/query engine': {
    color: colors.engines,
    description: 'Issue in the query engine',
  },
  'engines/introspection engine': {
    color: colors.engines,
    description: 'Issue in the introspection engine',
  },
  'engines/data model parser': {
    color: colors.engines,
    description: 'Issue in the parser for the Prisma schema',
  },
  'engines/other': {
    color: colors.engines,
    description: 'Issue in the engines repo that does not fit one of the other labels.',
  },
}
