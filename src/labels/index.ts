import { Config } from 'label-sync-core'
import { prismaAdminFeedback } from './repositories/prisma-admin-feedback'
import { prisma } from './repositories/prisma'
import { graphqlPlayground } from './repositories/graphql-playground'
import { graphqlYoga } from './repositories/graphql-yoga'
import { yoga2 } from './repositories/yoga2'
import { graphqlgen } from './repositories/graphqlgen'
import { prismaBinding } from './repositories/prisma-binding'
import { graphqlBinding } from './repositories/graphql-binding';

const config: Config = {
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
