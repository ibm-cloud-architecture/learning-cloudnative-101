FROM node:alpine
WORKDIR /app
ADD package.json /app
RUN cd /app && npm install
ADD app.js /app
EXPOSE 8080
CMD ["node", "/app/app"]
