FROM node:16-alpine
ENV NODE_ENV="production"
WORKDIR /usr/src/app
RUN apk add --no-cache python3 py3-pip make g++
COPY package.json package-lock.json ./
RUN npm install
COPY *.js ./

CMD ["node", "./index.js"]
