# Bitwise calculator

Try [Bitwise calculator](http://bitwise.sergey-untilov.com).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to install

``` bash
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/install.sh
sh ./install.sh
```

## Jenkins in Docker

https://www.jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/

``` bash
sudo apt install wget
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/Dockerfile
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/scripts/docker-jenkins.sh
chmod +x ./docker-jenkins.sh
./docker-jenkins.sh
```

| Command                        | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| ./scripts/docker-jenkins.sh    | Run Jenkins in Docker                             |
| docker ps                      | Show active docker containers                     |
| docker logs <container's name> | Show container's log, and jenkins activation code |
| docker container exec -it <container's name> bash | Dive into container's bash     |
| http://localhost:8080          | Jenkins ip address                                |
| docker stop jenkins-blueocean jenkins-docker | Stop docker containers              |

