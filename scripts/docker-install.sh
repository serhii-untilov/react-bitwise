#!/bin/sh
docker stop react-bitwise
docker build -t react-bitwise:latest .
docker run --name react-bitwise --rm --detach \
  --privileged \
  --env NODE_ENV=production \
  --volume "$HOME":/home \
  --publish 80:3000 \
  react-bitwise:latest
