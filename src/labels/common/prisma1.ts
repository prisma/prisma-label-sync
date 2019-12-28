import { label } from 'label-sync'
export const colors = {
  area: 'fbca04',
  kind: 'c5def5',
  status: 'a9c1e8',
  rfc: 'b621ff',
  bug: 'd93f0b',
}

export const common = {
  'rfc/0-needs-spec': label(colors.rfc),
  'rfc/1-draft': label(colors.rfc),
  'rfc/2-accepted': label(colors.rfc),
  'rfc/x-rejected': label(colors.rfc),
  'bug/0-needs-info': label({
    color: colors.bug,
    description: 'More information is needed for reproduction.',
    // siblings: ['kind/bug'],
  }),
  'bug/1-repro-available': label({
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
    // siblings: ['kind/bug'],
  }),
  'bug/2-confirmed': label(colors.bug),
  'kind/bug': label(colors.kind),
  'kind/discussion': label(colors.kind),
  'kind/duplicate': label(colors.kind),
  'kind/feature': label(colors.kind),
  'kind/feedback': label(colors.kind),
  'kind/question': label(colors.kind),
  'kind/intended-behavior': label(colors.kind),
  'status/pr-welcome': label(colors.status),
  'status/research-needed': label(colors.status),
  'status/candidate': label({
    color: colors.status,
    description: 'This issue will probably be considered soon for the roadmap',
  }),
  'status/next': label({
    color: colors.status,
    description: 'Will be addressed with the next major version',
  }),
  'status/on-hold': label({
    color: colors.status,
    description: 'This issue is on hold.',
  }),
  'status/stale': label({
    color: colors.status,
    description: 'Marked as state by the GitHub stalebot',
  }),
}
