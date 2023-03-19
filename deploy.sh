#!/bin/sh
userName="pi"
hostName="st"
rsync -avzP --rsh=ssh ./build/* $userName@$hostName:/home/$userName/react-bitwise/
rsync -avzP --rsh=ssh ./install.sh $userName@$hostName:/home/$userName/react-bitwise/
rsync -avzP --rsh=ssh ./apache.conf $userName@$hostName:/home/$userName/react-bitwise/
