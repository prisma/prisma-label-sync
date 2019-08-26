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
    description: 'We have confirmed that this is a bug',
  },
  'kind/bug': {
    color: colors.kind,
    description: 'A reported bug',
  },
  'kind/regression': {
    color: colors.kind,
    description: 'A reported bug in functionality that used to work before',
  },
  'kind/feature': {
    color: colors.kind,
    description:
      'A new request or an improvement to existing code. Code will need to be added or removed.',
  },
  'kind/docs': {
    color: colors.kind,
    description: 'A documentation change is required.',
  },
  'kind/discussion': {
    color: colors.kind,
    description: 'Discussion is required on the suggested code change.',
  },
  'kind/question': {
    color: colors.kind,
    description: 'Developer asked a question. No code changes required.',
  },
  candidate: {
    color: colors.process,
    description: 'candidate for the next release',
  },
}
