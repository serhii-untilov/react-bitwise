FROM node:18-alpine
WORKDIR /react-bitwise/
COPY public/ /react-bitwise/public
COPY src/ /react-bitwise/src
COPY package.json /react-bitwise/
RUN npm install
RUN npm install pm2 -g
RUN apk add libcap && setcap 'cap_net_bind_service=+ep' pm2-runtime
USER 1000
EXPOSE ${PORT}
CMD pm2-runtime start --name bitwise npm -- start
