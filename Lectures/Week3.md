# Git and GitHub
## How Do We Work On the Same Project Together?
Most software is made with teams, but the finished result is a single collection of software files often called a **CODEBASE**.
Since making software requires multiple people working on a single file system, coordinating how programmers will work together is important.

A good example of collaborative software is Google Drive. It allows multiple people to work on a document at the same time.
Would Google Docs work with writting software? NO!

Let's say all of us are writting code on the same project, we're each working on different features that will be in the project.
Let's say I get to a point where I feel good about what I've written, and want to try to run the code I've written.
99% of the time my code would FAIL, not because what I wrote is incorrect (although that could be the case...) it's because the other people on the team are writting code in the same codebase. Incomplete code causes crashes. In order to run my code I would have to wait until everyone else's code is finished, or ask everyone to comment out there work so I can test mine and then tell them when they can get back to work. All of these options ruin everyone's productivity!

We need a way to allow each of us to work on the same project without worrying about what other teammates are working on. This will allow me to do everything I need to do and run the code as much as I'd like without affecting my other teammates!

## Version Control
The solution is to make different **VERSIONS** of the same codebase. Each version represents a change to the codebase, a version that we'll release to the public, a version for testing, a version for the current thing you're working on etc.

Lastly we need something that can manage (i.e. **CONTROL**) all of these versions, in a way that makes it easier for us to keep track of them all, we want to focus on what needs to be made NOW, not on what has already been built and tested.

Introducing **version control systems**  (a.k.a source control systems)! These systems do everything above to help teams make software and manage the changes they make to their products!

OK, what's the best way to manage all of the changes (a.k.a versions) we make of our codebase? If you think about it, we make our first version as the initial version, then when we add something, we make another version, adding our changes, and then we repeat until we're done! (Disclaimer: Done, isn't really a thing in software engineering) Basically, when we're done, we'll have a large list of versions that show each task completed, in other words the finished version control system will have a group of versions that are a **TIMELINE** of our code, from the first key pressed to the final feature added!

So, the best way to organize these versions is chronilogically (from earliest to latest). By building and throghourly testing each change before progressing, it allows us to focus on the latest changes, giving us less to worry about.

## Git
The version control system we're using is Git, in git the changes/versions you create are called **COMMITS**, and the entire collection of changes/versions as a whole are called a **REPOSITORY** (aka REPO).

Git has an additional feature that allows you to organize the commits even better! **BRANCHES** are a collection of commits that allows each commit can be changed individually or as a whole. This, again makes it easier for us to change the repository in simipler ways.

After a while, a repo will look like this, several branches that are made of commits:

Typically, the first commit is created in the master branch, the master branch is the collection of commits that will be used to make the version of the software that the customers will use.

Typically, a develop branch is made, this is where the developers create the branches and commits they need to make new changes. Typically a developer makes a branch for each new feature that needs to be added, they make commits in that branch that will add that feature, then, when the task is complete, the branch is **MERGED** or added to the develop branch, the develop branch is typically tested to make sure the code works, then the develop branch is **MERGED** or added to the master branch. (NOTICE THE USE OF THE WORK TYPICALLY)

### Example of a Repository
I'm sure they used some version control system to make Grand Theft Auto, here's an example of what that could look like (VERY simplified of course)

the `-` and `/` are branches, the numbers are commits, see how the branches are made of commits?
(COMMITS AREN'T NUMBERED, I just numbered them so I can refer to each commit when I explain it, each commit is given an ID similar to a number, but you don't know enough for me to explain that just yet)

```
master
   0 - - - - - - - - - - - - - - 6
    \                           /
     \     Create Los Santos   /        Make NPC AI
      \   2 - - - 3 - - - 4   /       10 - - 12
       \ /                 \ /       /
develop 1 - - - - - - - - - 5 - 7 - 9
                                 \
                                  8 - - - 11 - - - - 13 - - - - 14
                                   Make hookers or whatever
```

So, when we started our project, we made an initial commit at 0 on the master branch then, we make a develop branch where all of our changes will stem from (get it... stem?... branch?...) Our first task is to make the city in GTA5 Los Santos! since it's a new task, we create a branch from the develop branch and start our work. It takes us three commits to make the city (probably took hundreds of thousands of branches and commits on the real GTA5). When the task is complete, we merge the changes into develop (NOTICE commit 5 is a commit that contains all of the changes from 2, 3, and 4 and add them to commit 1).

Since we're **GOOD DEVELOPERS** and not **IDIOTS** we **THROUGHLY TEST** the commits **BEFORE** each merge **ESPECIALLY** before we merge develop into master. (TIP: big companies also make a branch called staging that is identical to master, but is used for integration testing aka testing that the features added from the branches work together instead of testing what's inside each branch).

Then, after the commits are merged, we continue to new tasks! (NOTICE the "Make NPC AI" and "Make hookers or whatever" branches have everything from commit 5 in them already because they were made on the same branch and AFTER commit 5)

## GitHub
So far, we've talked about Git, so what is GitHub? GitHub is a website where you store your repository so that teammates can get (aka pull) the latest versions, add their commits and send (aka push) thier work to.

In other words, the repo on GitHub is the Source Of Truth meaning that there are copies of the repository on everyone's machine, but the one that is on GitHub is the "official copy" that everyone is working together to build.

## Setting Up Your First Repository and Submitting Homework!

1. Go to this repo on GitHub!

    https://github.com/Raymond427/CSProgram

2. Click the fork button, this will add this repo to your account!

3. Download the repo! This is called CLONING THE REPO

    ```
    git clone git@github.com:YOUR_USER_NAME/CSProgram.git
    ```

4. Open the repo on VSCode

    ```
    cd REPO ADDRESS
    code .
    ```

5. On the left side of your window, you'll see the Git icon under the search icon.

6. Open the folder with your name on it and complete the assignments!

7. Open the Git icon on your window

    You'll see an M next to the files you've changed, this means they were modified.

    If you make a file it will have a U, meaning that it is untracked, Git DOESN'T track new files by default.

8. Stage the changes you've made, this means "These are the changes I want in the commit"

9. Make the commit! ALWAYS type a message in your commit, it helps people understand what the commit does, typically commits are written in present tense.


10. Push up your changes! click "more actions" next to the check and circle arrow at the top of the git console and push!

11. You should see your new branches and changes in your repo!

12. Next we'll make a Pull Request! This is how you allow teammates to review the code you've written! Go to your branch and make a pull request, set the reviewer to the project owner (me)