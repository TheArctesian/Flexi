echo "Do you have bash installed (type y for yes and n for no)"
read input
if [ $input = "n"]
then 
    sudo pip3 install termcolorbin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" &&
    brew install nodejs
    brew install npm
    brew install python3
    brew install pip3 
    npm i -g yarn

fi

if [ $input = "y" ] 
then 
    brew install nodejs
    brew install npm
    brew install python3
    brew install pip3 
    npm i -g yarn
    sudo pip3 install termcolor
fi 
