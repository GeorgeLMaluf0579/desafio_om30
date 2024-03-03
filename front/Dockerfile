FROM node:18.19.0-alpine
RUN yarn config set no-progress true
RUN mkdir -p /front
WORKDIR /front
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "dev"]