FROM nginx:1.29-alpine

RUN rm /etc/nginx/conf.d/*

COPY dev.nginx.conf /etc/nginx/conf.d/frontend.conf