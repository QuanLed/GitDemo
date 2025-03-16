# Git

## Check version: 
 git --version

## Config Git: 
 <p> git config --global user.name "User name Git cua ban" </p>
 <p> git config --global user.email "Email cua ban" </p>

## Initialize Git: 
 git init

## Git help:
 <p> git command -help -  See all the available options for the specific command </p>
 <p> git help --all -  See all possible commands </p>

## Check status:
 <p> git status </p>
 <p> =Note:= use `git status --short` with short status flags are: </p>
 <p> ?? - Untracked files </p>
 <p> A - Files added to stage </p>
 <p> M - Modified files </p>
 <p> D - Deleted files </p>

## Add files to the Staging:
 - git add --all
 - git add -A
 - git add file-name
 
## Git commit:
 <p> git commit -m "message of commit" </p>
 <p> =Note:= Commit without Stage will automatically stage every changed, already tracked file </p>
 <p> git commit -a -m "message of commit" </p>
 
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

