import { labelsync } from "label-sync";

// prisma 1
import { prisma1 } from "./repositories/prisma1";
import { prismaAdminFeedback } from "./repositories/prisma-admin-feedback";
import { prisma1Examples } from "./repositories/prisma1-examples";

// prisma 2
import { prisma } from "./repositories/prisma";
import { studio } from "./repositories/studio";
import { migrate } from "./repositories/migrate";
import { prismaClientJs } from "./repositories/prisma-client-js";
import { specs } from "./repositories/specs";
import { prisma2Private } from "./repositories/prisma2-private";
import { prismaSdkJs } from "./repositories/prisma-sdk-js";
import { prismaEngines } from "./repositories/prisma-engines";
import { languageTools } from "./repositories/language-tools";
import { prismaExamples } from "./repositories/prisma-examples";
import { prismaClientGo } from "./repositories/prisma-client-go";
import { quaint } from "./repositories/quaint";
import { prismaTestUtils } from "./repositories/prisma-test-utils";
import { e2eTests } from "./repositories/e2e-tests";
import { errorReportingGui } from "./repositories/error-reporting-gui";
import { introspectionCi } from "./repositories/introspection-ci";
import { reIntrospectionCi } from "./repositories/re-introspection-ci";
import { tiberius } from "./repositories/tiberius";

labelsync({
  repos: {
    // prisma 1
    prisma1: prisma1,
    "prisma-admin-feedback": prismaAdminFeedback,
    "prisma1-examples": prisma1Examples,

    // prisma 2
    prisma: prisma,
    "prisma-client-js": prismaClientJs,
    migrate: migrate,
    studio: studio,
    specs: specs,
    "prisma2-private": prisma2Private,
    "prisma-sdk-js": prismaSdkJs,
    "prisma-engines": prismaEngines,
    "language-tools": languageTools,
    "prisma-examples": prismaExamples,
    "prisma-client-go": prismaClientGo,
    quaint: quaint,
    "prisma-test-utils": prismaTestUtils,
    "e2e-tests": e2eTests,
    "error-reporting-gui": errorReportingGui,
    "introspection-ci": introspectionCi,
    "re-introspection-ci": reIntrospectionCi,
    "tiberius": tiberius
  }
});
