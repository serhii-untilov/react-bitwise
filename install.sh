#!/bin/sh
#sudo apt update && sudo apt upgrade
#sudo apt install apache2 -y
sudo usermod -a -G www-data "$USER"
sudo ln -s "$(pwd)" /var/www/bitwise
sudo chown -R -f www-data:www-data /var/www/bitwise
sudo ln -s ${dir}/apache.conf /etc/apache2/sites-available/bitwise.conf
sudo a2ensite bitwise

