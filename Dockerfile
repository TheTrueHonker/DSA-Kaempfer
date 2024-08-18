FROM node:18.19-alpine as build
WORKDIR /usr/local/app

COPY . /usr/local/app/

RUN npm ci
RUN npm run test

RUN npm run build

## Stage 2
FROM nginx:1.27.1-alpine

COPY --from=build /usr/local/app/dist/DSA-Kaempfer/browser /usr/share/nginx/html
COPY --from=build /usr/local/app/nginx-config/default.conf /etc/nginx/conf.d

EXPOSE 80
