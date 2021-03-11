FROM node:latest

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install -g npm@latest && npm install && npm audit fix

COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start"]
