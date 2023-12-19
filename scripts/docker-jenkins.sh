docker network create jenkins

docker stop jenkins-docker
sleep 2s
docker run --name jenkins-docker --rm --detach \
  --privileged \
  --network jenkins --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 3000:3000 \
  --publish 5000:5000 \
  --publish 2376:2376 \
  docker:dind \
  --storage-driver overlay2

docker stop jenkins-blueocean
sleep 2s
docker build -t myjenkins-blueocean:2.426.2-1 .
docker run --name jenkins-blueocean --rm --detach \
  --privileged \
  --network jenkins \
  --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client \
  --env DOCKER_TLS_VERIFY=1 \
  --env JAVA_OPTS="-Dhudson.plugins.git.GitSCM.ALLOW_LOCAL_CHECKOUT=true" \
  --volume "$HOME":/home \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --publish 8080:8080 \
  --publish 50000:50000 \
  myjenkins-blueocean:2.426.2-1
