FROM node:21
WORKDIR /usr/src/app

ENV UB_HOST="localhost"
ENV UB_PORT="25565"
ENV UB_USERNAME="anonymous"
ENV UB_PASSWORD="password"
ENV LOGIN_PASSWORD="password"
ENV LOGIN="no"
ENV UB_AUTH="mojang"
ENV ENABLE_AB_MESSAGE="false"

COPY package*.json ./

RUN npm install -g npm
RUN npm upgrade
RUN npm install

COPY . .

CMD ["npm", "start"]
