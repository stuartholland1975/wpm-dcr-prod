FROM nginx:stable-alpine

COPY /build/. /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/media

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]