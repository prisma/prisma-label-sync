import { Config } from 'label-sync-core'

import { prisma } from './repositories/prisma'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { studio } from './repositories/studio'
import { prismaClientJs } from './repositories/prisma-client-js'
import { migrate } from './repositories/migrate'
import { prisma2 } from './repositories/prisma2'
import { specs } from './repositories/specs'
import { prisma2Private } from './repositories/prisma2-private'
import { prismaSdkJs } from './repositories/prisma-sdk-js'
import { prismaEngines } from './repositories/prisma-engines'
import { vscodePrisma } from './repositories/vscode-prisma'
import { prismaExamples } from './repositories/prisma-examples'
import { prismaClientGo } from './repositories/prisma-client-go'
import { prisma2DevelopmentEnvironment } from './repositories/prisma2-development-environment'
import { quaint } from './repositories/quaint'
import { prismaTestUtils } from './repositories/prisma-test-utils'


const config: Config = {
  // prisma 1
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,

  // prisma 2
  'prisma/studio': studio,
  'prisma/prisma-client-js': prismaClientJs,
  'prisma/migrate': migrate,
  'prisma/prisma2': prisma2,
  'prisma/specs': specs,
  'prisma/prisma2-private': prisma2Private,
  'prisma/prisma-sdk-js': prismaSdkJs,
  'prisma/prisma-engines': prismaEngines,
  'prisma/vscode-prisma': vscodePrisma,
  'prisma/prisma-examples': prismaExamples,
  'prisma/prisma-client-go': prismaClientGo,
  'prisma/prisma2-development-environment': prisma2DevelopmentEnvironment,
  'prisma/quaint': quaint,
  'prisma/prisma-test-utils': prismaTestUtils,
}

export default config
