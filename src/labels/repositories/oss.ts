import { toLabelSync, Label } from '../../utils'

const theme = {
  neutral: '#EEEEEE',
}

/**
 * Based off conventional commit notion of type. The kind of issue.
 * These labels may get their own colour to help visually differentiate
 * between them faster. The commit that closes this issue should generally
 * be of the same type as this label.
 */
const type = (name: string, description: string, color: string): Label => ({
  name: `type/${name}`,
  color,
  description,
})

/**
 * Based off conventional commit notion of scope. What area of
 * the project does the issue touch. The commit that closes this issue
 * should generally be of the same scope as this label.
 */
const scope = (name: string, description?: string): Label => ({
  name: `scope/${name}`,
  color: '#3267c9',
  description,
})

/**
 * Scrum story-pointing labels that help us track how complex an issue
 * is. Complexity rating is generally not transferable between teams.
 */
const complexity = (name: string, description?: string): Label => ({
  name: `complexity/${name}`,
  color: theme.neutral,
  description,
})

/**
 * Labels that help us track how impactful issues will be. Combined
 * with complexity label, helps inform prioritization.
 */
const impact = (name: string, description?: string): Label => ({
  name: `impact/${name}`,
  color: theme.neutral,
  description,
})

/**
 * Labels that help us mark issues as being on hold for some reason.
 */
const needs = (name: string, description?: string): Label => ({
  name: `needs/${name}`,
  color: '#FFE601',
  description,
})

/**
 * Labels that help us coordinate with the community.
 */
const community = (name: string, description?: string): Label => ({
  name: `community/${name}`,
  color: '#7057ff',
  description,
})

/**
 * Labels that help us track issue short-circuites or other minimal
 * categorical details.
 */
const note = (name: string, description?: string): Label => ({
  name: `note/${name}`,
  color: theme.neutral,
  description,
})

const common: Label[] = [
  type('bug', 'Something is not working the way it should', '#D73A4A'),
  type(
    'chore',
    'Something that does not directly impact the user/runtime',
    '#EEEEEE',
  ),
  type('feature', 'Add a new capability or enhance an existing one', '#3BDB8D'),
  type(
    'discussion',
    'Open-ended conversation about something (ideation, design, analysis, ...)',
    '#f0b3fc',
  ),
  type('perf', 'Improve the efficiency of something', '#FFCF2D'),
  impact('high', 'All users will benefit'),
  impact('medium', 'Many users will benefit'),
  impact('low', 'A few users will benefit'),
  complexity('1', 'skateboard'),
  complexity('2', 'bicycle'),
  complexity('3', 'motorcycle'),
  complexity('5', 'truck'),
  complexity('8', 'hovercraft'),
  complexity('13', 'spaceship'),
  needs('clarification', 'Unable to answer question/feature without more info'),
  needs(
    'use-cases',
    'More motivating examples needed to understand/appreciate idea/tradeoffs',
  ),
  needs('investigation', 'Possibly an issue, needs more analysis/research'),
  community('help-wanted', 'Not our focus, but accepting PRs'),
  community('good-first-issue', 'Good for newcomers'),
  note('invalid', 'Initial assumptions turned out wrong'),
  note('wontfix', 'Resolving the issue was explicitly ruled out'),
  note('duplicate', 'This issue existed already'),
  scope('error-handling', 'Relates to error types, messages, capturing, ...'),
  scope(
    'docs',
    'Relates to knowledge transfer matter (refs, guides, tuts, examples, ...)',
  ),
  scope('cicd', 'Relates to process automations'),
]

export default toLabelSync({
  'prisma/nexus-prisma': [
    ...common,
    scope('auth', 'Relates to Prisma crud/model auth'),
    scope('generation', 'Relates to typegen/codegen systems'),
    scope('publishing', 'Relates to Prisma crud/model publishing'),
    scope('resolving', 'Relates to implementing resolvers'),
    note(
      'prisma-1',
      'specific to the version of nexus-prisma based on Prisma 1',
    ),
  ],
  'prisma/nexus': [
    ...common,
    scope('auth', 'Relates to authorization and/or authentication'),
    scope('gql-spec', 'Relates to coverage of the GraphQL Spec'),
    scope('generation', 'Relates to typegen system'),
  ],
})
