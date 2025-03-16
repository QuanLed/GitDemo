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
 <p> ==Note:== use `git status --short` with short status flags are: </p>
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
 <p> ==Note:== Commit without Stage will automatically stage every changed, already tracked file </p>
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

## Git Fetch:
 gets all the change history of a tracked branch/repo <br>
 git fetch
 
## Git Pull:
 pull all changes from a remote repository into the branch you are working on to update our local Git <br>
 git pull origin name-of-branch
 
## Git Stash:
 git stash như một nút "tạm dừng" cho tiến trình công việc và nó được lưu trữ lại trong repo của bạn.
### Git stash save:
 Git stash cùng mới một message kèm theo <br>
 git stash save "Toi dang automation test Login page" <br>
 Git stash loại bỏ những files không được theo rõi <br>
 git stash save -u <br>
 or <br>
 git stash save --include-untracked <br>
### Git stash list:
 xem danh sách stash và cái gần nhất bạn tạo nó ở trên đầu
 git stash list
### Git stash apply:
 lấy stash cuối cùng (gần nhất) để apply nó vào code, đúng kiểu stack, vào cuối - ra đầu.<br>
 git stash apply <br>
 nếu giờ mà muốn apply một thằng khác thì lấy thằng id của stash đó <br>
 git stash apply stash@{1}
### Git stash pop:
 như git apply nhung rút ra là xoá stash đó khỏi đống stash <br>
 git stash pop <br>
 or <br>
 git stash pop stash@{1}
### Git stash show:

### Git stash branch <name>:
 Tạo một branch mới với nhưng thay đổi tương ứng trong stash gần nhất và cũng xoá nó khỏi stash list như git stash pop. <br> 
 Nó cực kỳ hữu ích khi code stash của bạn conflict với code mới nhất bạn kéo về trên nhánh đang làm việc.<br>
 git stash branch branch-draff <br>
 or <br>
 git stash branch branch-draff stash@{1}
### Git stash clear:
 Xoá toàn bộ stash bạn đang lưu trữ trong repo, sẽ không revert lại được nên chú ý nhé!<br>
 git stash clear
### Git stash drop:
 Xoá 1 stash, có thể không revert được đâu nhé!<br>
 git stash drop <br>
 or <br>
 git stash drop stash@{1}
