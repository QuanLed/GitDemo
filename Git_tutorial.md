# Git

## Check version: 
 git --version

## Config Git: 
 git config --global user.name "User name Git cua ban"
 git config --global user.email "Email cua ban"

## Initialize Git: 
 git init

## Git help:
 git command -help -  See all the available options for the specific command
 git help --all -  See all possible commands

## Check status:
 git status
 =Note:= use `git status --short` with short status flags are:
 ?? - Untracked files
 A - Files added to stage
 M - Modified files
 D - Deleted files

## Add files to the Staging:
 - git add --all
 - git add -A
 - git add file-name
 
## Git commit:
 git commit -m "message of commit"
 =Note:= Commit without Stage will automatically stage every changed, already tracked file
 git commit -a -m "message of commit"
 
## Git clone:
 git clone
 
## Git branch:
### Check current branch:
 git branch
### Creat new branch:
 git branch name-of-branch
### Check out a branch:
 git checkout name-of-branch
### Check out to a new branch:
 git checkout -b name-of-branch

## Merge branch:
 git merge name-of-branch

## Git add remote repository:
 git remote add origin <url>