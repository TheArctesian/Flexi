# can use doas here if you want to run it as root and not have the bloat of sudo
sudo emerge --ask -q dev-vcs/git nodejs dev-python/pip net-libs/nodejs
pip3 install termcolor
npm i -g yarn
# if your running this you probably have everything you neef installed but go ahead and run it just incase