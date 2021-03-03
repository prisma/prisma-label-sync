# prisma-labelsync 🏷

This repository serves as a central place to apply labels to Github repositories of the `prisma` organization.

It uses [`maticzav/label-sync`](https://github.com/maticzav/label-sync) by @maticzav to sync the [configuration held in this repository](https://github.com/prisma/prisma-labelsync/tree/master/src/repositories) to all the [repositories defined](https://github.com/prisma/prisma-label-sync/blob/master/src/main.ts).

## Common Tasks

### Add a new repository

1. First add the repository to the [list of defined repositories](https://github.com/prisma/prisma-label-sync/blob/master/src/main.ts) (`import` and entry in `repos` object)
1. Then actually create the file you just imported in [the `repositories` directory](https://github.com/prisma/prisma-label-sync/tree/master/src/repositories). You can use one of the existing files in that directory as a template. (update the `export const` and make sure the configured labels make sense)

Note: The current configuration uses `lowerCamelCase` for the repositories, so a repository `prisma/prisma-labelsync` is represented as `prismaLabelsync` (the org is dropped, as ~~all~~ most the repos live in `prisma`) for example which is then used in the `import` and also filename.

⚠️ Do not edit [labelsync.yml](./labelsync.yml). It's a generated file.

### Add a new label / Update an existing label / Remove a label

1. Find the repository configuration file [here](https://github.com/prisma/prisma-label-sync/tree/master/src/repositories) and add, update or remove the label
1. If the expected label is not present in that file directly, the code should tell you where it comes from (e.g. [one of the common sets of labels](https://github.com/prisma/prisma-label-sync/tree/master/src/common)) and where you can update it

### Rename an existing label

`label-sync` supports renaming labels via the `alias` property. Rename the label, then add a `alias` property with a list of the old names for `label-sync` to be able to make the connection and rename instead of deleting the old and creating a new label.

### Apply configuration changes

- When you create a Pull Request your changes (_with_ `labelsync.yml` generated changes via e.g. the precommit hook) will automatically be "dry run" by the GitHub App and a comment will be posted which summarizes the expected changes.
- When you create a Pull Request your changes (_without_ `labelsync.yml` generated changes) you can comment `/labelsync` on the PR to trigger a Github Actions that runs the generation for you and commits the file to your PR branch. This way you can also edit the source code via Github UI for example. The Github app will automatically "dry run" and a comment will be posted which summarizes the expected changes.
- On merge, the changes will then be applied to the repositories.
