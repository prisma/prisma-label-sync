import { Label } from '../labelsync-wrapper'

/**
 * Colors taken from https://tailwindcss.com/docs/customizing-colors
 */
export const theme = {
  neutral: '#EEEEEE',
  refine: '#F9A8D4',
  shiny: '#34D399',
  semiShiny: '#A7F3D0',
  danger: '#EF4444',
  warning: '#FFCF2D',
  social: '#A78BFA',
}

interface ExtraOptions {
  siblings?: Label['siblings']
  alias?: Label['alias']
}

/**
 * Based off conventional commit notion of type. The kind of issue.
 * These labels may get their own colour to help visually differentiate
 * between them faster. The commit that closes this issue should generally
 * be of the same type as this label.
 */
export function type(
  name: string,
  color: string,
  description: string,
  extraOptions?: ExtraOptions,
): Label {
  return {
    name: `type/${name}`,
    color: color,
    description: description,
    ...extraOptions,
  }
}

/**
 * Labels that help us track issue short-circuites or other minimal
 * categorical details.
 */
export function note(
  name: string,
  description?: string,
  extraOptions?: ExtraOptions,
): Label {
  return {
    name: `note/${name}`,
    color: theme.neutral,
    description: description,
    ...extraOptions,
  }
}

/**
 * Labels that help us track how impactful issues will be. Combined
 * with complexity label, helps inform prioritization.
 */
export function impact(name: string, extraOptions?: ExtraOptions): Label {
  return {
    name: `impact/${name}`,
    color: theme.neutral,
    ...extraOptions,
  }
}

/**
 * Effort that help us track how impactful issues will be. Combined
 * with complexity label, helps inform prioritization.
 */
export function effort(name: string, extraOptions?: ExtraOptions): Label {
  return {
    name: `effort/${name}`,
    color: theme.neutral,
    ...extraOptions,
  }
}

/**
 * Labels that help us mark issues as being on hold for some reason.
 */
export const needs = (
  name: string,
  description?: string,
  extraOptions?: ExtraOptions,
): Label => ({
  name: `needs/${name}`,
  color: theme.warning,
  description: description,
  ...extraOptions,
})

/**
 * Based off conventional commit notion of scope. What area of
 * the project does the issue touch. The commit that closes this issue
 * should generally be of the same scope as this label.
 */
export function scope(
  name: string,
  description?: string,
  extraOptions?: ExtraOptions,
): Label {
  return {
    name: `scope/${name}`,
    color: '#94ebfc',
    description: description,
    ...extraOptions,
  }
}

/**
 * Labels that help us coordinate with the community.
 */
export function community(
  name: string,
  description?: string,
  extraOptions?: ExtraOptions,
): Label {
  return {
    name: `community/${name}`,
    color: theme.social,
    description: description,
    ...extraOptions,
  }
}

/**
 * Labels that help us identify what group of people should be taking a task.
 */
export function team(
  name: string,
  description?: string,
  extraOptions?: ExtraOptions,
): Label {
  return {
    name: `team/${name}`,
    color: theme.social,
    description: description,
    ...extraOptions,
  }
}

//prettier-ignore
export const ossLabels = [
  type('question',        theme.social,    ''),
  note('duplicate',                        'This issue existed already'),      
  note('wontfix',                          'Resolving the issue was explicitly ruled out'),
  community('help-wanted',                 'Not our focus, but accepting PRs'),
  community('good-first-issue',            'Good for newcomers'),
  needs('discussion',                      'Open-ended conversation about something (ideation, design, analysis, ...)'),
]

//prettier-ignore
export const libraryLabels = [
  type('docs',            theme.refine,    'Relates to knowledge transfer matter (refs, guides, tuts, examples, ...)'),
  note('breaking-change',                  'This issue existed already'), // todo consider color exception
]

//prettier-ignore
export const commonLabels = [
  type('feat',            theme.shiny,     'Add a new capability or enhance an existing one'),
  type('improve',         theme.semiShiny, 'Something existing is made better, does not affect the interface (example: better error message)'),
  type('bug',             theme.danger,    'Something is not working the way it should'),
  type('chore',           theme.refine,    'Something that does not warrant a release, zero runtime impact'),
  type('perf',            theme.refine,    'Improve the efficiency of something'),
  type('tests',           theme.refine,    'Internal tests'),
  type('refactor',        theme.refine,    'Address tech debt, internal incidental complexity'),
  type('deps',            theme.refine,    'A dependency upgrade visible to users (so, not devDeps)'),

  scope('lens',         'About the Prisma Lens UI library'),
  scope('authn',        'About authentication, signin, tokens, signout'),
  scope('authz',        'About permissions to perform actions on resources, roles'),
  scope('api',          'About the GraphQL cloud API'),
  scope('gui',          'About the Cloud webapp'),
  scope('db',           'About the prisma schema models, migrations'),
  scope('ops',          'About anything operational, monitoring, analytics, ...'),
  scope('ci',           'About our continuous integration pipelines'),

  team('product',       'Members of the product team are responsible for this'),
  team('engineering',   'Members of the engineering team are responsible for this'),
  team('design',        'Members of the design team are responsible for this'),

  note('invalid',                          'Initial assumptions turned out wrong'),

  needs('upstream',                        'An upstream component needs to be updated first'),

] as Label[]
