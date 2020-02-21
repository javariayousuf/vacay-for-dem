# Git Cheat Sheet

## Switching branches:

* `git checkout branchName` : switch branches
* `git checkout -b newBranchName` : make new branch and switch to it

## Pulling new changes
* `git pull`: get new changes from remote branch (what is online on Github). Usually you want to do this from the master branch, and then use `git merge` to bring those changes to a different branch if necessary.

## Merging branches:

* `git merge origin/master` : brings the changes from local master branch into current local branch
