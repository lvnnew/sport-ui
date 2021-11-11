FROM node:15 AS builder

RUN mkdir /app
WORKDIR /app

RUN npm i -g serve

COPY package.json yarn.lock ./
RUN yarn
COPY . .

RUN yarn build

# Actual image
FROM nginx:1.20-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apk add jq

RUN mkdir /app
WORKDIR /app

COPY run.sh run.sh

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD /app/run.sh
