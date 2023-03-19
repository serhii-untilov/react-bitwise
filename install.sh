#!/bin/sh

# sudo apt update && sudo apt upgrade
# sudo apt install apache2 -y

isSymlink () {
  first_character=$(sudo ls -l "$1" | cut -c1) 2>/dev/null
  # 0 = true
  if [ "$first_character" = "l" ]; then return 0; fi
  # 1 = false
  return 1
}

sudo usermod -a -G www-data "$USER" || { echo "usermod failed" ; exit 1; }
echo "Add current user into www-data group - OK"

if isSymlink "/var/www/bitwise"; then sudo unlink /var/www/bitwise; fi
sudo ln -s $(pwd) /var/www/bitwise || { echo "creating symlink failed" ; exit 1; }
echo "Create /var/www/bitwise symlink - OK"

sudo chown -R -f www-data:www-data /var/www/bitwise || { echo "chown failed" ; exit 1; }
echo "Set owner for /var/www/bitwise directory - OK"

if isSymlink "/etc/apache2/sites-available/bitwise.conf"; then sudo unlink /etc/apache2/sites-available/bitwise.conf; fi
sudo ln -s $(pwd)/apache.conf /etc/apache2/sites-available/bitwise.conf || { echo "creating symlink failed" ; exit 1; }
echo "Create symlink for apache config file - OK"

sudo a2dissite bitwise > /dev/null
sudo a2ensite bitwise > /dev/null
sudo systemctl stop apache2
sudo systemctl start apache2 || { echo "start apache failed" ; exit 1; }
echo "Restart apache - OK"

exit 0