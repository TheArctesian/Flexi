sudo pacman -S postgres

sudo -u postgres -i 
initdb -D '/var/lib/postgres/data'
exit

sudo systemctl enable postgresql --now
sudo systemctl status postgresql

