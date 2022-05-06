FROM nginx:stable-alpine

COPY /build/. /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN mkdir /usr/share/media
# COPY /media/. /usr/share/nginx/media/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]