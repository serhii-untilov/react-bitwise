#!/bin/sh
user_name=pi
host_name=st
rsync -avzP --rsh=ssh ./build/* "$(user_name)"@"$(host_name)":/home/"$(user_name)"/react-bitwise/
rsync -avzP --rsh=ssh ./install.sh "$(user_name)"@"$(host_name)":/home/"$(user_name)"/react-bitwise/
rsync -avzP --rsh=ssh ./apache.conf "$(user_name)"@"$(host_name)":/home/"$(user_name)"/react-bitwise/
