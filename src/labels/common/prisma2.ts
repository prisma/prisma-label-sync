export const colors = {
  area: 'FFD700',
  kind: '3B5BDB',
  status: 'F8F9FA',
  bug: 'ee0000',
  priority: 'F783AC',
  scope: '27CF79',
  team: 'FDF4E8',
  release: 'a5d8ff',
}

export const common = {
  'bug/0-needs-info': {
    color: colors.bug,
    description: 'More information is needed for reproduction.',
    siblings: ['kind/bug'],
  },
  'bug/1-repro-available': {
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
    siblings: ['kind/bug'],
  },
  'bug/2-confirmed': {
    color: colors.bug,
    description: 'We have confirmed that this is a bug',
    siblings: ['kind/bug'],
  },
  'kind/bug': {
    color: colors.kind,
    description: 'A reported bug',
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
  'release/preview1': {
    color: colors.release,
    description: 'Prisma Preview release 1',
  },
  'release/preview2': {
    color: colors.release,
    description: 'Prisma Preview release 2',
  },
  'release/preview3': {
    color: colors.release,
    description: 'Prisma Preview release 3',
  },
  'release/preview4': {
    color: colors.release,
    description: 'Prisma Preview release 4',
  },
  'release/preview5': {
    color: colors.release,
    description: 'Prisma Preview release 5',
  },
  'release/preview6': {
    color: colors.release,
    description: 'Prisma Preview release 6',
  },
  'release/preview7': {
    color: colors.release,
    description: 'Prisma Preview release 7',
  },
  'release/preview8': {
    color: colors.release,
    description: 'Prisma Preview release 8',
  },
  candidate: {
    color: colors.area,
    description: 'candidate for the next release',
  },
}
