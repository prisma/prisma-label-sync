import { Label } from '../labelsync-wrapper'

interface ExtraOptions {
  siblings?: Label['siblings']
  alias?: Label['alias']
  color?: string
}

export const theme = {
  neutral: '#F3F4F6',
  refine: '#EDD8B0',
  great: '#85EC94',
  good: '#D1FAE5',
  critical: '#E94B63',
  danger: '#F87171',
  warning: '#FFE601',
  social: '#EDE9FE',
  info: '#6366F1',
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
  color: theme.danger,
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
    name: `${name}`,
    color: theme.info,
    description: description,
    ...extraOptions,
    alias: [`scope/${name}`, ...(extraOptions?.alias ?? [])],
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
export const groups = {
  /**
   * Useful labels for most everything.
   */
  common: [
    type('feat',            theme.great,     'Add a new capability or enhance an existing one'),
    type('improve',         theme.good,      'Something existing is made better, does not affect the interface (example: better error message)'),
    type('bug',             theme.critical,  'Something is not working the way it should'),
    type('chore',           theme.warning,   'Something that does not warrant a release, zero runtime impact'),
    type('perf',            theme.refine,    'Improve the efficiency of something'),
    type('tests',           theme.refine,    'Internal tests'),
    type('refactor',        theme.refine,    'Address tech debt, internal incidental complexity'),
    type('deps',            theme.refine,    'A dependency upgrade that is visible to users'),
    type('spec',            theme.refine,    'Detailed analysis of some feature/area in document form'),
    type('design',          theme.refine,    'Detailed analysis of some feature/area in document form'),

    scope('ci',                              'About our continuous integration pipelines'),
    scope('error-messages',                  'About how errors/exceptions are reported to users'),

    note('invalid',                          'Initial assumptions turned out wrong'),

    needs('upstream',                        'An upstream component needs to be updated first'),
  ],

  /**
   * Useful labels for open source projects.
   */
  oss: [
    note('duplicate',                        'This issue existed already'),      
    note('wontfix',                          'Resolving the issue was explicitly ruled out'),
    community('help-wanted',                 'Not our focus, but accepting PRs'),
    community('good-first-issue',            'Good for newcomers'),
  ],

  /**
   * Useful labels for libraries.
   */
  library: [
    type('docs',            theme.refine,    'Relates to knowledge transfer matter e.g. guides, tutorials, examples, ...'),
    note('breaking-change',                  'This issue existed already', { color: theme.danger }),
  ],

  /**
   * Useful labels for backend applications.
   */
  backendApplication: [
    scope('authn',                           'About authentication, signin, tokens, signout'),
    scope('authz',                           'About permissions to perform actions on resources, roles'),
    scope('api',                             'About the GraphQL cloud API'),
    scope('db',                              'About the prisma schema models, migrations'),
    scope('ops',                             'About anything operational, monitoring, analytics, ...'),
  ],

  /**
   * Useful labels for frontend applications.
   */
  frontendApplication: [
    scope('gui/app',                         'About views and layouts'),
    scope('gui/lib',                         'About reusable components'),
  ],

  /**
   * Specific to Prisma workflows.
   */
  prisma: [
    team('product',                          'Members of the product team are responsible for this'),
    team('engineering',                      'Members of the engineering team are responsible for this'),
    team('design',                           'Members of the design team are responsible for this'),
  ]
}
