FROM registry.access.redhat.com/ubi8/nodejs-12

COPY package*.json ./

ENV NODE_ENV=production

RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
