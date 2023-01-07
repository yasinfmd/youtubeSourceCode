FROM node

# serve !
RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY .. /app/

RUN npm run build

EXPOSE 8080

CMD [ "http-server","build" ]