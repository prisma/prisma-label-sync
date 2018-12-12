import { Config } from 'label-sync-core'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prisma } from './repositories/prisma'
import { graphqlPlayground } from './repositories/graphql-playground'
import { graphqlYoga } from './repositories/graphql-yoga'
import { graphqlgen } from './repositories/graphqlgen'
import { prismaBinding } from './repositories/prisma-binding'

const config: Config = {
  'prisma/prisma': prisma,
  'prisma/prisma-admin-feedback': prismaAdminFeedback,
  'prisma/graphql-playground': graphqlPlayground,
  'prisma/graphql-yoga': graphqlYoga,
  'prisma/graphqlgen': graphqlgen,
  'prisma/prisma-binding': prismaBinding,
}

export default config
