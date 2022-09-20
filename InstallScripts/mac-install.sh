echo "Do you have brew installed (type y for yes and n for no)"
read input
if [ $input = "n"]
then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" 
    brew install nodejs
    brew install npm
    brew install python3
    brew install pip3 
    pip install flask waitress
    sudo npm i -g yarn

fi

if [ $input = "y" ] 
then 
    brew install nodejs
    brew install npm
    brew install python3
    brew install pip3 
    npm i -g yarn
    pip install flask waitress
fi 
