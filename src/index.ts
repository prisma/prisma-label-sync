import { configuration, make } from 'label-sync'

import { prisma } from './labels/repositories/prisma'
import { prismaAdminFeedback } from './labels/repositories/prisma-admin-feedback'
import { studio } from './labels/repositories/studio'
import { photonjs } from './labels/repositories/photonjs'
import { lift } from './labels/repositories/lift'
import { prisma2 } from './labels/repositories/prisma2'
import { specs } from './labels/repositories/specs'
import { prisma2Private } from './labels/repositories/prisma2-private'
import { prismaSdkJs } from './labels/repositories/prisma-sdk-js'
import { prismaEngine } from './labels/repositories/prisma-engine'
import { vscodePrisma } from './labels/repositories/vscode-prisma'
import { prismaExamples } from './labels/repositories/prisma-examples'
import { photongo } from './labels/repositories/photongo'
import { prisma2DevelopmentEnvironment } from './labels/repositories/prisma2-development-environment'
import { quaint } from './labels/repositories/quaint'

const config = configuration({
  repositories: {
    // prisma 1
    prisma: prisma,
    'prisma-admin-feedback': prismaAdminFeedback,

    // prisma 2
    studio: studio,
    photonjs: photonjs,
    lift: lift,
    prisma2: prisma2,
    specs: specs,
    'prisma2-private': prisma2Private,
    'prisma-sdk-js': prismaSdkJs,
    'prisma-engine': prismaEngine,
    'vscode-prisma': vscodePrisma,
    'prisma-examples': prismaExamples,
    photongo: photongo,
    'prisma2-development-environment': prisma2DevelopmentEnvironment,
    quaint: quaint,
  },
})

make({
  configs: [config],
})
