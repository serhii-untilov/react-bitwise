# Bitwise operator

Try [Bitwise operator](http://bitwise.untilov.com.ua).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the application

### In a Docker container

``` bash
sh ./start.sh
sensible-browser http://localhost:3000/
```

The application will be available at [localhost:3000](http://localhost:3000/)

### Let's Encrypt

Configure [https](https://phoenixnap.com/kb/letsencrypt-docker).

https://phoenixnap.com/kb/letsencrypt-docker

### In Jenkins by a Docker container

``` bash
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/jenkins/install.sh
sh ./install.sh
```

## Additional information

### Jenkins in a Docker container

https://www.jenkins.io/doc/tutorials/build-a-node-js-and-react-app-with-npm/

``` bash
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/jenkins/Dockerfile
wget https://raw.githubusercontent.com/serhii-untilov/react-bitwise/master/jenkins/docker-jenkins.sh
sh ./docker-jenkins.sh
```

| Command                        | Description                                       |
| ------------------------------ | ------------------------------------------------- |
| ./scripts/docker-jenkins.sh    | Run Jenkins in Docker                             |
| docker ps                      | Show active docker containers                     |
| docker logs <container's name> | Show container's log, and jenkins activation code |
| docker container exec -it <container's name> bash | Dive into container's bash     |
| http://localhost:8080          | Jenkins ip address                                |
| docker stop jenkins-blueocean jenkins-docker | Stop docker containers              |

