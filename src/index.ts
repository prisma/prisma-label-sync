import * as Octokit from '@octokit/rest'
import * as meow from 'meow'
import { handleSync, createCISyncTerminalReport } from 'label-sync-core'

/** Labels import */
import labels from './labels'

/** CLI tool */

const cli = meow(``, {
  flags: {
    dryrun: {
      type: 'boolean',
      default: false,
    },
    help: {
      alias: 'h',
      type: 'boolean',
      default: false,
    },
  },
})

main(cli)

/**
 * Main
 */

async function main(cli: meow.Result): Promise<void> {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('Missing Github credentials.')
  }

  if (cli.flags.help) {
    console.log(`
      prisma-label-sync synchronizes our labels

      USAGE

        GITHUB_TOKEN="..." prisma-label-sync

      Flags

        --dry-run  Perform a dry run without removing labels [default: false]
        --help     Display this help message
    `)
    return
  }

  const client = new Octokit({
    headers: {
      accept: 'application/vnd.github.symmetra-preview+json',
    },
  })

  client.authenticate({
    type: 'app',
    token: process.env.GITHUB_TOKEN,
  })

  const report = await handleSync(client, labels, {
    dryRun: cli.flags.dryrun,
  })

  const humanReadableReport = createCISyncTerminalReport(report)

  console.log(humanReadableReport)
}
