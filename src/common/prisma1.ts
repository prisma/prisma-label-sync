import { Label, label } from 'label-sync/dist/generator'

export const colors = {
  area: 'fbca04',
  kind: 'c5def5',
  status: 'a9c1e8',
  rfc: 'b621ff',
  bug: 'd93f0b',
}

export const common: Label[] = [
  label('rfc/0-needs-spec', colors.rfc),
  label('rfc/1-draft', colors.rfc),
  label('rfc/2-accepted', colors.rfc),
  label('rfc/x-rejected', colors.rfc),
  label({
    name: 'bug/0-needs-info',
    color: colors.bug,
    description: 'More information is needed for reproduction.',
    siblings: ['kind/bug'],
  }),
  label({
    name: 'bug/1-repro-available',
    color: colors.bug,
    description: 'A reproduction exists and needs to be confirmed.',
    siblings: ['kind/bug'],
  }),
  label({ name: 'bug/2-confirmed', color: colors.bug, siblings: ['kind/bug'] }),
  label('kind/bug', colors.kind),
  label('kind/discussion', colors.kind),
  label('kind/duplicate', colors.kind),
  label('kind/feature', colors.kind),
  label('kind/feedback', colors.kind),
  label('kind/question', colors.kind),
  label('kind/intended-behavior', colors.kind),
  label('status/pr-welcome', colors.status),
  label('status/research-needed', colors.status),
  label({
    name: 'status/candidate',
    color: colors.status,
    description: 'This issue will probably be considered soon for the roadmap',
  }),
  label({
    name: 'status/next',
    color: colors.status,
    description: 'Will be addressed with the next major version',
  }),
  label({
    name: 'status/on-hold',
    color: colors.status,
    description: 'This issue is on hold.',
  }),
  label({
    name: 'status/stale',
    color: colors.status,
    description: 'Marked as state by the GitHub stalebot',
  }),
]
