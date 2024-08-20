FROM nginx:latest
ARG APP
COPY dist/apps/${APP}/ /usr/share/nginx/html
