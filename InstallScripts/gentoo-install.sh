#!/bin/bash

printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -


echo "Do you want to use 1.sudo 2.doas (default=1) or type h for help"

read res

if [ $res = "1" ]
then
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    sudo emerge -q git python3 python3-pip nodejs npm
    sudo npm i -g yarn
    pip install flask waitress
fi
if [ $res = "2" ] 
then 
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    doas apt-get update
    doas apt install git python3 python3-pip nodejs npm
    doas npm i -g yarn
    pip install flask waitress
fi 
if [ $res = "h" ] 
then 
    printf '%*s\n' "${COLUMNS:-$(tput cols)}" '' | tr ' ' -
    echo 'Your running gentoo, this is simple you do not need help'
fi
