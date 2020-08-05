# prisma-labelsync 🏷

This repository serves as a central place to apply labels to Github repositories of the `prisma` organization.

TODO Update below!

It uses [`maticzav/label-sync`](https://github.com/maticzav/label-sync) by @maticzav to sync the [configuration held in this repository](https://github.com/prisma/prisma-label-sync/tree/master/src/labels/repositories) to all the [repositories defined](https://github.com/prisma/prisma-label-sync/blob/master/src/labels/index.ts). It is executed via Circle CI integration and workflow when changes to this repository are merged or commited.

## Common Tasks

### Add a new repository

1. First add the repository to the [list of defined repositories](https://github.com/prisma/prisma-label-sync/blob/master/src/labels/index.ts) (`import` and entry in `config` object)
1. Then actually create the file you just imported in [the `repositories` directory](https://github.com/prisma/prisma-label-sync/tree/master/src/labels/repositories). You can use one of the existing files in that directory as a template. (update the `export const` and make sure the configured labels make sense)

Note: The current configuration uses `lowerCamelCase` for the repositories, so a repository `prisma/prisma-label-sync` is represented as `prismaLabelSync` (the org is dropped, as ~~all~~ most the repos live in `prisma`) for example which is then used in the `import` and also filename.

### Add a new label / Update an existing label / Remove a label

1. Find the repository configuration file [here](https://github.com/prisma/prisma-label-sync/tree/master/src/labels/repositories) and add, update or remove the label
1. If the expected label is not present in that file directly, the code should tell you where it comes from (e.g. [one of the common sets of labels](https://github.com/prisma/prisma-label-sync/tree/master/src/labels/common)) and where you can update it

### Rename an existing label

`label-sync` itself does not support renaming an existing label - if you rename a label it will first remove the old one, then add the new on with the new name. This will obviously remove the association of that label with existing issues and pull requests.

To work around this, you can _manually_ rename an existing label to its new name (or ask someone that has the necessary GitHub permissions). Then `label-sync` will just update the description and color during the next run and the association with issues will stay as it should.

### Apply configuration changes

When you create a Pull Request your changes will automatically be run as a "dry run" on Circle CI. This will output the calculated and expected changes of `label-sync`. 

After you merged the pull request, the commit to `master` will run the same "dry run" again - and also start a workflow on Circle CI that will let you "approve" the changes seen in the dry run (if you do not have the permission to do that, ask someone who does - the people that previously committed here are a good start to ask about this), which will then trigger the actual live sync that will change the configuration on Github.

Note: Not all commits to `master` have to actually be approved and run. If you just approve the last one, `label-sync` will apply the most up to date version of the configuration which will also trigger all the changes of previous commits. 
