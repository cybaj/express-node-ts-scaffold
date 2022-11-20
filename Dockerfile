FROM node:16-alpine3.14 AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --update --repository http://dl-cdn.alpinelinux.org/alpine/edge/community --repository http://dl-cdn.alpinelinux.org/alpine/edge/main vips-dev 
RUN apk add --no-cache python2 py-pip make g++

RUN yarn install
COPY . .
RUN yarn build

FROM node:16-alpine3.14
RUN apk add --update --repository http://dl-cdn.alpinelinux.org/alpine/edge/community --repository http://dl-cdn.alpinelinux.org/alpine/edge/main vips-dev 
RUN echo "Asia/Seoul" > /etc/timezone

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
ENV PORT 3000

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY --from=builder /app/dist/ build/

HEALTHCHECK --interval=60s --timeout=2s --retries=3 CMD wget localhost:${PORT}/healthz -q -O - > /dev/null 2>&1

EXPOSE $PORT
CMD ["yarn", "start"]
