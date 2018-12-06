import { Config } from 'label-sync-core'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback';

const config: Config = {
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
}

export default config
