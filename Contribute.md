# Contribute

Thank you for showing interest. You can skip this section. I am an open source and free software advocate and I feel like at this school there is no big opportunities for students to contribute to the community with code. I have open sourced this project and pushed the repo on the site because I feel that CIS needs to cultivate a more open source community and also because I hope for this project to be used after I leave (i graduate 2023). So please make some PR and talk to lagos or a teacher about maintaining the backend so this doesn't day and so we can all contribute to this as a community.

# Quick links

- <a href="#how">How</a>
- <a href="#git">Git and Setup</a>
- <a href="#frontend">Frontend</a>
- <a href="#backend">Backend</a>

# How

_This guide will be for Mac because I expect most people to be on it. I will also not support windows because it disagrees with my moral values. If you really need windows please see the Script folder for a guide on how to install WSL (windows subsystem for linux)_

I want to prefix this with saying that will be hard, even more so if you have never coded before. If you do go through with this and finish reading the contribute guide you will not only be contributing to the CIS community and helping your peers, but also learn the basic of software development and gain the skills to contribute to open source projects.

## Git

I am going to assume you know nothing. Git is a VCS used, created originally because Linus Torvalds hated the other option when creating Linux. Github is a site which hosts repositories (think folders), it is the foundation of software development and open source software. There are github alt like gitlab and bitbucket for those who don't want their data hosted on a microsoft server.

To install this repo you will need a crash course on git basics.

First you need to install git:

If you are on linux or BSD system you should already have git install.

If you are on mac:

First install brew. If you don't have it open the terminal app and run this command. This might take a while.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After you that install the git crate using this command

```
brew install git
```

Once you have this installed you will be ready to clone (download) this repository. First you will need to `cd` (change directory) into a place where you can easily access this folder.

Personally I recommend making a script folder on your desktop and saving it there. To do this run these commands _you can run this with the comments_

```bash
cd # change to your home directory or your ~/ dir can see this from doing the command pwd
cd Desktop # change dir to desktop
mkdir scripts # make a folder/dir called scripts
cd scripts # change dir into scripts
```

After that install/clone this repo using this command

```bash
git clone https://github.com/TheArctesian/Flexi.git
```

You can check the files in this dir using the command

```bash
cd Flexi # change to flexi dir
ls #lists the files and folders in dir
```

Should show something like this:

```bash
Client        Contribute.md LICENSE       README.md     Scripts       Utils         log.md        test.json     todo.md
```

_Might not be the exact same, I or someone else might have changed this_

Before doing anything else you should use an IDE (integrated development environment). If you already have one feel free to use that. I personally use neovim but I will be writing this guide with the expectation you will use VScode. To install it run the command:

```bash
brew install --cask visual-studio-code
```

From here, given that your are in the right dir check that with:

```bash
pwd
```

should output

```bash
/Users/<youName>/Desktop/Scripts/Flexi
```

or wherever you put it.

You can open VScode with the command

```
code .
```

The `.` represents the directory you are currently in. It will open VS code with the project on the side. It should look like this:

<img src="Scripts/Assets/code.png" alt="my vs code setup, picture failed to load">
Note I have customized my vs code with a lot of extensions these can be found in the extensions menu. Yours might look more like:

<img src="https://code.visualstudio.com/assets/docs/getstarted/tips-and-tricks/getstarted_page.png" alt="vs code sample, this img failed to load">
Spend some time in the extensions menu to personalize your environment.
<br>
<br>
From here you should download the requirements for this project. To do this drag up on on the bottom of your screen or use the terminal in the top bar.

<img src="Scripts/Assets/termHead.png" alt="my vs code setup, picture failed to load">
This will show something like this
<img src="Scripts/Assets/intTerm.png" alt="my vs code setup, picture failed to load">

Now go ahead and type these commands in.

```bash
cd Flexi/Scripts
sh mac-install.sh #this might take a while
```

The sh command runs this shell file I made for mac os, please read through the file if you now what your doing or read the [Readme file](Scripts/README.md) for more info.

If you are on a linux based OS please you the appropriate file.

<hr>

From here you can start editing and playing around.

If you want to actually end up contributing back to the repo you will need a github account.

Go to [github.com](https://github.com/) and sight up for an account.

After go to your settings menu by clicking on your icon then settings
<img src="Scripts/Assets/githubSettings.png" alt="github settings picture failed to load">
Then go down to developer settings
<img src="Scripts/Assets/githubSettings2.png" alt="github settings picture failed to load">
And then to Personal Access Tokens
<img src="Scripts/Assets/auth.png" alt="github settings picture failed to load">
And create a new personal access token
<img src="Scripts/Assets/newToken.png" alt="github settings picture failed to load">
Set an expire date for your token (you can set no expiration but this is a vulnerability and is not recommended).
<img src="Scripts/Assets/exp.png" alt="github settings picture failed to load">
Then check all the settings
<img src="Scripts/Assets/checkall.png" alt="github settings picture failed to load">
Now save your key to a separate location, it should look something like this.

```bash
ghp_AC0llectionOfLettersAndNumbers000000 #not a real key
```

<img src="Scripts/Assets/saveCred.png" alt="github settings picture failed to load">

After which go back to your VScode. Config your github using

```bash
git config --global user.email "{your email}"
git config --global user.name "{your username}"
```

Now we are ready for branching. Branching allows for other developers to contribute to a repository while others are still developing on it. It also allows for developing on projects that you don't own. When you create a branch you are creating an offshoot of the project that you can edit on. When you push the code back to the repository it will show up as a pull request, which can be accepted or rejected by the owner of the repository. If you are a more visual learner this might make more sense.
<img src="https://www.nobledesktop.com/image/gitresources/git-branches-merge.png" alt="branching">

So lets start.

You can see see all the branches open now by doing

```
git branch
```

it should output

```bash
* main # and any other branch
```

Create a new branch with

```bash
git checkout -b your_name
```

Replace your_name with your name or the name of the feature your adding.

Now check that you are on the right branch with

```
git status
```

It should output something like

```
On branch <branch name>
nothing to commit, working tree clean
```

If you aren't you can switch branches with

```
git checkout <branch name>
```

<p id="upstream"> Now add the remote upstream. Remote upstream's make your branch tracked on a local remote branch. doesn't really matter if you don't get it.</p>

To add a new remote upstream with

```bash
git remote add upstream https://github.com/<YourUserName>/Flexi
```

Now you can make your edits to the code please checkout the sections <a href="#frontend">frontend</a> and <a href="#backend">backend</a>.

When you are done add the files you want to add with

```bash
git add . # or path to single files
```

Commit the files to github with

```bash
git commit -am "a description of your commits"
```

Finally push it to github with

```bash
git push -u origin <branchName>
```

Now when you go on github you should see the option create pull request.

After this you can see a pop on github page listed in your upstream <a href='#upstream'> path </a>. You will se something like this

<img src="Scripts/Assets/pull.png" alt="pull">

After pressing that button you will see

<img src="Scripts/Assets/createPull.png" alt="create pull">

Leave a comment on what you changed and why it should be accepted.

After which github will check that the code will compile after your change. If this fails please fix your bugs.

After which you can check out yours and other pull request it will look like this.
<img src="Scripts/Assets/PullReq.png" alt="pull">

Then wait for a admin or me to accept the req and merge it to the master branch.

## Frontend

There is a lot to learn about frontend web development. Bellow are recourses that you can use to learn. For this project I will be using the following front end utils:

- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [Tailwind](https://tailwindcss.com/docs/utility-first)

watch this [video](https://www.youtube.com/watch?v=Sxxw3qtb3_g) for more info on tech stacks.

Before messing with anything you will need to know the basic of front end web dev. This is a pretty big topic but luckily me and my friends have curated a couple useful slides to get you caught up.

- [HTML](https://docs.google.com/presentation/d/1zEDUD8xcI1ZWbegZ6kH_R9lgoqPfXKeez7LoMft7I8o/edit)
- [CSS](https://docs.google.com/presentation/d/1ENWTM1m23CpmUUZWxKtiVRVeheIIzNy8t_V4z7HP3lk/edit)
- [JS](https://docs.google.com/presentation/d/17JY428t877CWFui2BuKTUr3_4H073bSf2C-WQejw7eQ/edit)

Front end dev is split into three components, I will give a very short introduction to each bellow but please look at the links above for more info.

### 1

HTML which is the mark down language of the web. If you look at the raw file for this MD file you will see some. For example the pictures that I used above are written like this

```html
<img src="Scripts/Assets/createPull.png" alt="create pull" />
```

This line of code produces the img
<img src="Scripts/Assets/createPull.png" alt="create pull">

IT is also
Please look at the [html slides]() for more info.

## Backend

Backend work is pretty easy as I am using firebase. Ofc this means that you will need some permissions to edit the backend. For those permission.

Documentation on firebase can be found here. [Firebase](https://firebase.google.com/docs)
