import { Config } from 'label-sync-core'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prisma } from './repositories/prisma'
import { graphqlPlayground } from './repositories/graphql-playground'
import { graphqlYoga } from './repositories/graphql-yoga'
import { yoga2 } from './repositories/yoga2'
import { graphqlgen } from './repositories/graphqlgen'
import { prismaBinding } from './repositories/prisma-binding'
import { graphqlBinding } from './repositories/graphql-binding'
import { prismaStudio } from './repositories/prisma-studio'
import { prismaPhotonJS } from './repositories/prisma-photonjs'
import { prismaLift } from './repositories/prisma-lift'
import { prismaDocs } from './repositories/prisma2-docs'
import { prismaCLI } from './repositories/prisma2-cli'
import { prisma2 } from './repositories/prisma2'
import { specs } from './repositories/specs'
import { prisma2Private } from './repositories/prisma2-private'
import { prismaSdkJs } from './repositories/prisma-sdk-js'
import { prismaEngine } from './repositories/prisma-engine'

const config: Config = {
  // prisma 2
  'prisma/studio': prismaStudio,
  'prisma/photonjs': prismaPhotonJS,
  'prisma/lift': prismaLift,
//   'prisma/prisma2-docs': prismaDocs,
//   'prisma/prisma2-cli': prismaCLI,
  'prisma/prisma2': prisma2,
  'prisma/specs': specs,
  'prisma/prisma2-private': prisma2Private,
  'prisma/prisma-sdk-js': prismaSdkJs,
  'prisma/prisma-engine': prismaEngine,

  // prisma 1
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
  'prisma/graphql-playground': graphqlPlayground,
  'prisma/graphql-yoga': graphqlYoga,
  'prisma/yoga2': yoga2,
  'prisma/graphqlgen': graphqlgen,
  'prisma/prisma-binding': prismaBinding,
  'graphql-binding/graphql-binding': graphqlBinding,
}

export default config
