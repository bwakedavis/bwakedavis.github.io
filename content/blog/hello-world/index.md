---
title: Git Cheat Sheet
date: "2015-05-01T22:12:03.284Z"
description: "Git is a free open source distributed version control tool that tracks changes in your file. 
As a developer believe me you need it more than anything else ('Just kidding 😛'). But its important."
---
# Mastering Git

**Git** is a free open source distributed version control tool that tracks changes in your file. 
As a developer believe me you need it more than anything else ('*Just kidding* 😛'). But its important.

## Git Terminal commands

*Here is a cheat sheet of commands you might find useful and come to love:*

```git
    git config --global user.name "exampleuser"
```

-sets a name identifiable for credit when reviewing version history

```git
    git config --global user.email "exampleuser@email.com"
```

-set an email address associated with the version history

```git
    git config --global color.ui auto
```

-set automatic coloring of git in the command line

```git
    git init
```

-initialize a local directory on you computer as a git repository

```git
    git clone
```

-retrieve a repository from a central remote hosting

```git
    git status
```

-show modifications on the working tree

```git
    git add <fileName>
```

-add the named file to the staging area

```git
    git add .
```

-adds all tracked files to the staging area

```git
    git reset
```

-unstage a file but retains changes in the working directory

```git
    git diff
```

-shows changes between commits,commit and working tree

```git
    git diff --staged
```

-show changes made to a file in the staging area

```git
    git commit -m "commit message"
```

-commits your staged content as a new commit snapshot

```git
    git branch <branchName>
```

-creates a new branch

* Branches enables you to isolate your changes and context and integrate them together when you're ready*

```git
    git branch -a
```

-lists all your branches

```git
    git checkout <branchName>
```

-switches to the named branch

```git
    git merge <branchName>
```

-merge the specified branch with the current one

```git
    git log
```

-shows all commits in the current branch

```git
    git log branchB..branchA
```

-shows commits on branchA that are not on branchB

```git
    git log --follow <fileName>
```

-shows commits that changed a file,even if it was renamed

```git
    git diff branchB...branchA
```

-shows changes that are in branchA and not in branchB

```git
    git show <SHA>
```

-shows any object in git in human-readble format

```git
    git rm <fileName>
```

-removes the file from the project and stage the change

```git
    git mv <currentPath> <newPath>
```

-changes an existing path and stage the move

```git
    git log --stat -M
```

-shows all commits log and paths changed

```git
    git remote add <alias> <url>
```

-add a remote git url to your local repository

```git
    git fetch <alias>
```

-fetch all the branches from a central remote repositoy

```git
    git merge <alias>/<branch>
```

-merge a remote branch into your current one locally

```git
    git push <alias> branch
```

-transmit local branch to the remote repository branch

```git
    git push -u <alias> branch    OR
    
    git push --set-upstream <alias> <branchName>
```

-push the current branch and set the remote as upstream


```git
    git pull
```

-fetch and merge any commits from the remote tracking branch

```git
    git rebase <branch>
```

-apply any commits on current branch ahead of specified one

```git
    git reset --hard <commit>
```

-clear staging area,rewrite working tree from specified commit

```git
    git stash
```

-save modified and staged changes

```git
    git stash list
```

-list stack order of stashed file changes

```git
    git stash pop
```

-write working from top of stash stack

```git
    git stash drop
```

-discard changes from top of stash stack

```git
    git restore --staged <fileName>
```

-revert non committed changes from the staging area

