# Pull Request Template

For your PR to be reviewed and merged as quickly as possible, please review and adhere to the pull request process.

## Pull Request Title

Please ensure that you have included a meaningful title describing your change. All Pull Requests MUST have a related Azure DevOps Work Item, changes not linked to an Azure DevOps Work Item will not be accepted.

You should link your pull request to an open issue using the `AB#nnnnn` syntax where `nnnnn` is the Work Item Id. This will ensure that the Work Item is automatically linked when your pull request is merged.

> Remove this section when completed.

 For example...

- Adds ETJ Inventory report. Closes AB#2774
- Fixes AB#1297

> Remove this section when completed.

## Pull Request Description

> Provide a meaningful description to assist with team members who will review and merge your code. Remove this line when completed.

## Avoiding Merge Conflicts

Merge conflicts occur when the branch you want to merge is out of date. To ensure this does not happen, you should ensure that your branch is up-to-date before submitting your pull request by executing the below git commands.

```bash
    git checkout main
    git pull upstream main
    git push origin main
    git checkout <your-branch>
    git rebase main
    git push origin <your-branch> -f
```

> Remove this section when completed.

## Pull Request Branch

You should only submit your changes to the **beta** branch.

Pull requests submitted to other branches will be rejected.

> Remove this section when completed.

## Pull Request Checklist

- [ ] Does the PR Title have an Azure DevOps linked WorkItem?
- [ ] Did you follow [Branch Naming Guidelines](https://github.com/transport4/documents/wiki/Branching-Conventions)?
- [ ] Did you PR to the correct base branch (beta vs. hotfix)?
- [ ] Did you merge master into your branch to reduce conflicts?
- [ ] Does your code build?
- [ ] Does your database successfully deploy (if it applies)?
- [ ] Did you test each code change individually?
- [ ] Do your changes meet the Business Requirements and all Acceptance Criteria (User Story/Task), or fix the bug or defect?
- [ ] Do my changes meet the Technical Requirements?
- [ ] Is all debugging code removed (SQL print statements, console.log, debug: true, etc)?
- [ ] Is your code clean enough for the reviewer or another developer to easily understand at first glance?
- [ ] Did you update the work item status?
- [ ] Did you update any associated documentation?
- [ ] Do all your unit tests pass locally?
