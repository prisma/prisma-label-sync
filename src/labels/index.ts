import { Config } from 'label-sync-core'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prisma } from './repositories/prisma'

const config: Config = {
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
}

export default config
