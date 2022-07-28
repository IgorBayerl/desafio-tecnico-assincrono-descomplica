# FROM node

# RUN mkdir -p /usr/src/app
# RUN mkdir -p /usr/src/app/client
# WORKDIR /usr/src/app/client
# COPY package*.json ./
# RUN npm install

# COPY . .
# EXPOSE 3000
# CMD [ "npm", "start" ]


FROM mhart/alpine-node:16 AS builder

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:1.16.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
