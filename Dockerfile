FROM node:18-alpine
WORKDIR /react-bitwise/
COPY public/ /react-bitwise/public
COPY src/ /react-bitwise/src
COPY package.json /react-bitwise/
RUN npm install
CMD ["npm", "start"]