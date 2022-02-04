All commands surrounded by *_________*
Arguments surrounded by < > 

//////////////////////////
Generic Terminal Commands
/////////////////////////

*cd ..* => go one step backwards in the directory tree (cd stands for change directory)
*cd ../cd ..* => example of chaining cd's to go back twice

*cd <name of directory>* => change to the directory named <name>

*cd ~* => navigates to home directory

*cd /* => navigates to root directory of PC

*touch <filename.extension>* => creates a new file (or updates existing file's modification time)

*mkdir <name of new directory>* => make a new directory with <name> 
    -names can be chained with spaces between.  
        eg) *mkdir A B C D E* makes 5 directories 
    -subdirectories can be added with a slash
        eg) *mkdir A/cat B* makes 2 directories (A and B) with a subdirectory (cat) inside A

*ls* => "list" the contents of current directory

*pwd* => prints the path to the current directory

*clear* => clears the screen

*<command> --help* => append this to any <command> to read the help file(s)

*rmdir <directory name>* => removes an EMPTY directory 
    CAUTION: skips trash bin!

*rm -rf <directory name>* => forces removal of a directory and all it's contents 
    CAUTION: skips trash bin!

*node* => enters Node REPL


////////////
Git Commands
////////////

*git status* => shows status (what is committed, what branch I'm on, etc)

*git push* => publish changes to GitHub

*git add <file.extension>* => adds a modified file to the staging area for a commit. eg) git add app.css

*git add .* => adds all modified files to the staging area for a commit

*git commit -m "<message text>"* => makes a commit (ie. snapshot of code) and records a message to document what changed in that version

*git remote -v* => shows the online fetch/push locations

*git log* => shows commit history
*git log -n 3* => shows last 3 commits 

*git fetch* => gets all the updates from the remote repository, including new branches

*git log <local branch>..<server branch>* => run this after a fetch to see the new commits (with their unique hash IDs) that were fetched from the current repo
    eg) *git log main..origin/main* compares my local 'main' branch with the 'main' branch server-side (origin/main)
    eg *git log --oneline main..origin/main* gives a 1-line view of each commit

*git show <hash ID>* => to view the specific changes to code in a particular commit, use the relevant hash ID

*git checkout <branch name>* => switches to a branch you want to work on

*git checkout -b <branch name>* => creates a new branch and switches to it

*git init <repository name>* => start a new, empty repository.  It will create a .git directory with its subdirectories. 

*git push* => push local commits to remote repository (GitHub) (if branch is already tracked)

*git push --set-upstream <remote branch> <branch name>* => use this to push a branch that isn't tracked yet

*git diff* => view the unstaged changes on the current branch 

*git diff --staged* => view the staged changes

*git diff <branch-X> <branch-Y>* => compare two branches

*git pull* => fetch all the changes from the remote repository and merge any remote changes in the current local branch

*git branch -a* => lists all the branches of the repository

*git branch <new branch>* => creates a new branch, without checking it out

*git branch -d <branch name>* => deletes a branch

*git push -u origin <branch name>* => adds a new branch to GitHub

*git clone <repository url> <directory>* => download the latest version of a remote project and copy it to selected location on local machine.  Directory is an optional argument.  Ideally, first navigate to the destination folder in terminal before executing the command. 



/////////////////////////////////////////////////////////////
Configuring remotes after cloing a repo fork to local machine
/////////////////////////////////////////////////////////////

1. *git remote rename origin upstream* => renames the origin to upstream.  This is used once you've forked and cloned someone else's repository.  "origin" by default refers to the original copy owned by someone else.  We want to rename that to "upstream"; we only have read-access to it.  We want to refer to our repository copy as "origin". This is GitHub convention.

2. *git remote -v* => just check to be sure the fetch and push URLs are now labeled "upstream"

3. *git remote add origin <URL>* => Grab the <URL> of our own fork from GitHub browser.  This links our remote fork to git as the origin where we have read/write access. <how to do step 3 in terminal?> 

Now we have two remotes: 
    origin - our own fork, where we have read and write access
    upstream - the original, where we have read-only access



///////////////////////////////////////////
Process to share changes with upstream repo
///////////////////////////////////////////

1. Commit local changes
2. Push changes to our repo => *git push origin*
3. On GitHub web UI, submit a pull request. <how to do this in terminal?>
4. Owner may merge. 



