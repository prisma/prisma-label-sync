import { Config } from 'label-sync-core'

import { prisma } from './repositories/prisma'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
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
import { photongo } from './repositories/photongo'
import { prisma2DevelopmentEnvironment } from './repositories/prisma2-development-environment'

const config: Config = {
  // prisma 1
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,

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
  'prisma/photongo': photongo,
  'prisma/prisma2-development-environment': prisma2DevelopmentEnvironment,

}

export default config
