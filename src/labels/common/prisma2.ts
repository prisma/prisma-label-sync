export const colors = {
  area: 'F03E3E',
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
    description:
      'A documentation change is required.',
  },
  'kind/discussion': {
    color: colors.kind,
    description:
      'Discussion is required on the suggested code change.',
  },
  'kind/question': {
    color: colors.kind,
    description: 'Developer asked a question. No code changes required.',
  },
  'priority/high': {
    color: colors.priority,
    description: 'This issue should be prioritized over other issues.',
  },
  'priority/mid': {
    color: colors.priority,
    description: 'Still needs to be prioritized',
  },
  'priority/low': {
    color: colors.priority,
    description: 'Other issues should be prioritized over this issue.',
  },
  'scope/l': {
    color: colors.scope,
    description: 'This is a large issue that requires thoughtful planning.',
  },
  'scope/m': {
    color: colors.scope,
    description: 'Scope is uncertain and still needs to be thought through',
  },
  'scope/s': {
    color: colors.scope,
    description: "This is a small issue that doesn't require much thought.",
  },
  'status/thinking': {
    color: colors.status,
    description:
      "We're thinking about this issue and haven't made any decisions yet",
  },
  'status/needs-response': {
    color: colors.status,
    description: 'We are waiting for a response before continuing.',
  },
  'status/upcoming': {
    color: colors.status,
    description: 'This issue will be resolved in an upcoming release',
  },
  'status/unplanned': {
    color: colors.status,
    description:
      'No plan to fix this in any specific release. Please discuss with us before working on this issue.',
  },
  'status/pr-welcome': {
    color: colors.status,
    description:
      'No plans to work on this but would happily accept a PR for this change.',
  },
  'status/stale': {
    color: colors.status,
    description: 'Marked as state by the GitHub stalebot',
  },
  'status/blocked': {
    color: colors.status,
    description: 'Depends on another issue which is blocking this one.',
  },
  'team/product': {
    color: colors.team,
    description: 'This issue is owned by the product team',
  },
  'team/content': {
    color: colors.team,
    description: 'This issue is owned by the content team',
  },
  'team/engineering': {
    color: colors.team,
    description: 'This issue is owned by the engineering team',
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
}
