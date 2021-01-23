FROM node:14-buster AS builder

RUN mkdir /app
WORKDIR /app

RUN npm i -g serve

COPY package.json yarn.lock ./
RUN npm i
# RUN npm i && npm cache clean
COPY . .

RUN npm run build

# Actual image
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apk add jq

RUN mkdir /app
WORKDIR /app

COPY run.sh run.sh

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD /app/run.sh
