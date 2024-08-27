FROM nginx:latest
ARG APP
COPY nginx.conf  etc/nginx/nginx.conf
COPY dist/apps/${APP}/ /usr/share/nginx/html
