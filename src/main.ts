import { labelsync } from 'label-sync'
import { toLabelSyncConfig } from './labelsync-wrapper'
import { checkpointClient } from './repositories/checkpoint-client'
import { checkpointPrismaIo } from './repositories/checkpoint-prisma-io'
import { cloud } from './repositories/cloud'
import { connectionString } from './repositories/connection-string'
import { e2eTests } from './repositories/e2e-tests'
import { errorReportingGui } from './repositories/error-reporting-gui'
import { introspectionCi } from './repositories/introspection-ci'
import { languageTools } from './repositories/language-tools'
import { migrate } from './repositories/migrate'
import { migrationsCi } from './repositories/migrations-ci'
// prisma 2
import { prisma } from './repositories/prisma'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prismaClientGo } from './repositories/prisma-client-go'
import { prismaClientJs } from './repositories/prisma-client-js'
import { prismaEngines } from './repositories/prisma-engines'
import { prismaExamples } from './repositories/prisma-examples'
import { prismaTestUtils } from './repositories/prisma-test-utils'
// prisma 1
import { prisma1 } from './repositories/prisma1'
import { prisma1Examples } from './repositories/prisma1-examples'
import { prisma2Private } from './repositories/prisma2-private'
import { quaint } from './repositories/quaint'
import { reIntrospectionCi } from './repositories/re-introspection-ci'
import { specs } from './repositories/specs'
import { studio } from './repositories/studio'
import { systemBehavior } from './repositories/system-behavior'
import { tiberius } from './repositories/tiberius'

labelsync({
  repos: {
    // prisma 1
    prisma1: prisma1,
    'prisma-admin-feedback': prismaAdminFeedback,
    'prisma1-examples': prisma1Examples,

    // prisma 2
    prisma: prisma,
    'prisma-client-js': prismaClientJs,
    migrate: migrate,
    studio: studio,
    specs: specs,
    'prisma2-private': prisma2Private,
    'prisma-engines': prismaEngines,
    'language-tools': languageTools,
    'prisma-examples': prismaExamples,
    'prisma-client-go': prismaClientGo,
    quaint: quaint,
    'prisma-test-utils': prismaTestUtils,
    'e2e-tests': e2eTests,
    'error-reporting-gui': errorReportingGui,
    'introspection-ci': introspectionCi,
    're-introspection-ci': reIntrospectionCi,
    tiberius: tiberius,
    'system-behavior': systemBehavior,
    'checkpoint-client': checkpointClient,
    'checkpoint.prisma.io': checkpointPrismaIo,
    'migrations-ci': migrationsCi,
    'connection-string': connectionString,
    ...toLabelSyncConfig([cloud]).repos,
  },
})
