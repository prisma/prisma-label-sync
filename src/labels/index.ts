import { Config } from 'label-sync-core'

import { prisma } from './repositories/prisma'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { graphqlPlayground } from './repositories/graphql-playground'
import { graphqlYoga } from './repositories/graphql-yoga'
import { yoga2 } from './repositories/yoga2'
import { graphqlgen } from './repositories/graphqlgen'
import { prismaBinding } from './repositories/prisma-binding'
import { graphqlBinding } from './repositories/graphql-binding'

import { studio } from './repositories/studio'
import { photonjs } from './repositories/photonjs'
import { lift } from './repositories/lift'
import { prisma2 } from './repositories/prisma2'
import { specs } from './repositories/specs'
import { prisma2Private } from './repositories/prisma2-private'
import { prismaSdkJs } from './repositories/prisma-sdk-js'
import { prismaEngine } from './repositories/prisma-engine'
import { vscodePrisma } from './repositories/vscode-prisma'
import { prismaExamples } from './repositories/prisma-examples'


const config: Config = {
  // prisma 1
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
  'prisma/graphql-playground': graphqlPlayground,
  'prisma/graphql-yoga': graphqlYoga,
  'prisma/yoga2': yoga2,
  'prisma/graphqlgen': graphqlgen,
  'prisma/prisma-binding': prismaBinding,
  'graphql-binding/graphql-binding': graphqlBinding,
  
  // prisma 2
  'prisma/studio': studio,
  'prisma/photonjs': photonjs,
  'prisma/lift': lift,
  'prisma/prisma2': prisma2,
  'prisma/specs': specs,
  'prisma/prisma2-private': prisma2Private,
  'prisma/prisma-sdk-js': prismaSdkJs,
  'prisma/prisma-engine': prismaEngine,
  'prisma/vscode-prisma': vscodePrisma,
  'prisma/prisma-examples': prismaExamples,

}

export default config
