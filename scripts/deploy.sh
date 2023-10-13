#!/bin/sh
appName="bitwise"
userName="pi"
hostName="nas"
rsync -avzP --rsh=ssh ./build/* $userName@$hostName:/home/$userName/$appName/
rsync -avzP --rsh=ssh ./apache-install.sh $userName@$hostName:/home/$userName/$appName/
rsync -avzP --rsh=ssh ./nginx-install.sh $userName@$hostName:/home/$userName/$appName/
rsync -avzP --rsh=ssh ./apache.conf $userName@$hostName:/home/$userName/$appName/
rsync -avzP --rsh=ssh ./nginx.conf $userName@$hostName:/home/$userName/$appName/
