FROM registry.access.redhat.com/ubi8/nodejs-12

COPY package*.json ./

RUN npm ci --only=production

COPY --chown=1001:0 . .
RUN chmod -R g=u .

ENV PORT=8080

ARG ENV=production
ENV NODE_ENV $ENV
ENV NODE_VERSION $NODEJS_VERSION
CMD npm run $NODE_ENV

