#!/bin/bash

printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -


echo "Do you want to use 1.sudo 2.doas (default=1) or type h for help"

read res

if [ $res = "1" ]
then
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    sudo pacman -Syyu
    
fi
if [ $res = "2" ] 
then 
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    doas pacman -Syyu
fi 
if [ $res = "h" ] 
then 
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    echo These two commons allow for super user privilages to run commands: 
    echo -e '\033[1mSudo:\033[0m Is the orignal tool and you probably have it as default if your running a arch based distro\n'
    echo -e '\033[1mDoas:\033[0m Is modern sudo that has been given the suckless treatmen. Sudo is very bloated meaning it has too many functions. Too many functions mean that there is a higher probability for a backdoor. If you have install arch from scratch then you might use this as default.'
fi
