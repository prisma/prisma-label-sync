import { colors } from '../common'

export const prisma = {
  labels: {
    'rfc/0-needs-spec': colors.rfc,
    'rfc/1-draft': colors.rfc,
    'rfc/2-accepted': colors.rfc,
    'rfc/x-rejected': colors.rfc,
    'bug/2-confirmed': colors.bug,
    'bug/0-needs-info': {
      color: colors.bug,
      description: 'More information is needed for reproduction.',
    },
    'bug/1-repro-available': {
      color: colors.bug,
      description: 'A reproduction exists and needs to be confirmed.',
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
      description:
        'This issue will probably be considered soon for the roadmap',
    },
    'status/next': {
      color: colors.status,
      description: 'Will be addressed with the next major version of Prisma',
    },
    'status/on-hold': {
      color: colors.status,
      description: 'This issue is on hold.',
    },
    'status/stale': {
      color: colors.status,
      description: 'Marked as state by the GitHub stalebot',
    },
  },
}
