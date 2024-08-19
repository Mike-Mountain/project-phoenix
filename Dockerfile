FROM nginx:latest
COPY dist/apps/container/index.html /usr/share/nginx/html
