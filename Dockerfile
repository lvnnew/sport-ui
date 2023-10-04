# DO NOT EDIT! THIS IS GENERATED FILE

FROM registry.gitlab.com/making.ventures/images/node-with-tools AS builder

# docker build --tag aloyal-ui .
# (docker rm -f aloyal-ui || true) && docker run --rm --name aloyal-ui -p 8080:80 -e ENDPOINT='https://aloyal-ep.stage.apps.stage01.making.ventures/adm' aloyal-ui

RUN mkdir /app
WORKDIR /app

COPY yarn.lock package.json ./
RUN yarn
COPY . .

RUN yarn build

# Actual image
FROM nginx:1.23-alpine

ARG GIT_COMMIT
ENV GIT_COMMIT=$GIT_COMMIT
RUN echo $GIT_COMMIT

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN apk add jq

RUN mkdir /app
WORKDIR /app

COPY run.sh run.sh

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD /app/run.sh
