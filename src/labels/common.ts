export const colors = {
  area: 'fbca04',
  kind: 'c5def5',
  status: 'a9c1e8',
  rfc: 'b621ff',
  bug: 'd93f0b',
}

export const common = {
  'rfc/0-needs-spec': colors.rfc,
  'rfc/1-draft': colors.rfc,
  'rfc/2-accepted': colors.rfc,
  'rfc/x-rejected': colors.rfc,
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
    siblings: ['kind/bug'],
  },
  'kind/discussion': colors.kind,
  'kind/duplicate': colors.kind,
  'kind/feature': colors.kind,
  'kind/feedback': colors.kind,
  'kind/question': colors.kind,
  'status/pr-welcome': colors.status,
  'status/research-needed': colors.status,
  'status/candidate': {
    color: colors.status,
    description: 'This issue will probably be considered soon for the roadmap',
  },
  'status/next': {
    color: colors.status,
    description: 'Will be addressed with the next major version',
  },
  'status/on-hold': {
    color: colors.status,
    description: 'This issue is on hold.',
  },
  'status/stale': {
    color: colors.status,
    description: 'Marked as state by the GitHub stalebot',
  },
}
