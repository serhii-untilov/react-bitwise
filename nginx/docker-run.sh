#!/bin/sh

appName="bitwise"

nginx_dir="$HOME/nginx"
sites_enabled_dir="$nginx_dir/sites-enabled"

if [ ! -d $nginx_dir ]; then
  echo "$nginx_dir does not exist. Creating."
  mkdir $nginx_dir
fi

if [ ! -d $sites_enabled_dir ]; then
  echo "$sites_enabled_dir does not exist. Creating."
  mkdir $sites_enabled_dir
fi

# isSymlink () {
#   first_character=$(ls -l "$1" | cut -c1) 2>/dev/null
#   if [ "$first_character" = "l" ]; then return 0; fi
#   # 0 - true, 1 - false
#   return 1
# }

# if isSymlink "$sites_enabled_dir/$appName.conf"; then unlink $sites_enabled_dir/$appName.conf; fi
# ln -s $(pwd)/nginx/nginx.conf $sites_enabled_dir/$appName.conf || { echo "creating symlink failed" ; exit 1; }
# echo "Create $sites_enabled_dir/$appName.conf symlink - OK"

#docker run --name nginx \
#--mount type=bind,source=$(pwd)/build,target=/usr/share/nginx/html,readonly \
#--mount type=bind,source=$(pwd)/nginx,target=/etc/nginx/conf,readonly \
#-p 80:80 -d nginx

cp -f $(pwd)/nginx/nginx.conf $sites_enabled_dir/$appName.conf

docker stop d-nginx
sleep 2s

docker run --name d-nginx \
    --rm --detach --privileged \
    --mount type=bind,source=$sites_enabled_dir,target=/etc/nginx/sites-enabled,readonly \
    --mount type=bind,source=$(pwd)/build,target=/var/www/bitwise,readonly \
    -p 80:80 \
    nginx
