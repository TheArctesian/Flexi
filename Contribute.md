# Contribute

Thank you for showing interest. You can skip to how if you don't care about my opions. I am an opensource and free software advoacte and I feel like at this school there is no big opportunities for students to contribute to the community with code. I have opensourced this project and pushed the repo on the site because I feel that CIS needs to cultivate a more open source community and also because I hope for this project to be used after I leave (i graduate 2023). So please make some PR and talk to lagos or a teacher about maintaing the backend so this dosn't day and so we can all contribute to this as a community.

# How

_This guide will be for Mac because I expect most people to be on it. I will also not support windows because it disagrees with my moral values_

I want to prefix this with saying that will be hard, even more so if you have never coded before. If you do go through with this and finish reading the contribute guide you will not only be contributing to the CIS community and helping your peers, but also learn the basic of software development and gain the skills to contribute to open source projects.

## Git (installing the code)

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

## Frontend
