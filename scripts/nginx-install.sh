#!/bin/sh
# Usage: sudo ./nginx-install.sh

appName="bitwise"

# sudo apt update && sudo apt upgrade
# sudo apt install nginx -y

isSymlink () {
  first_character=$(sudo ls -l "$1" | cut -c1) 2>/dev/null
  # 0 = true
  if [ "$first_character" = "l" ]; then return 0; fi
  # 1 = false
  return 1
}

sudo usermod -a -G www-data "$USER" || { echo "usermod failed" ; exit 1; }
echo "Add current user into www-data group - OK"

if isSymlink "/var/www/$appName"; then sudo unlink /var/www/$appName; fi
sudo ln -s $(pwd) /var/www/$appName || { echo "creating symlink failed" ; exit 1; }
echo "Create /var/www/$appName symlink - OK"

sudo chown -R -f www-data:www-data /var/www/$appName || { echo "chown failed" ; exit 1; }
echo "Set owner for /var/www/$appName directory - OK"

if isSymlink "/etc/nginx/sites-available/$appName.conf"; then sudo unlink /etc/nginx/sites-available/$appName.conf; fi
sudo ln -s $(pwd)/nginx.conf /etc/nginx/sites-available/$appName.conf || { echo "creating symlink failed" ; exit 1; }
echo "Create symlink for config file - OK"

sudo ln -s $(pwd)/nginx.conf /etc/nginx/sites-enabled/$appName.conf || { echo "creating symlink failed" ; exit 1; }
sudo systemctl stop nginx
sudo systemctl start nginx || { echo "start nginx failed" ; exit 1; }
echo "Restart nginx - OK"

exit 0