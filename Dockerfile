FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3001
CMD [ "npm", "start" ]