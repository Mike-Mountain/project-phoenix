FROM nginx:latest
COPY dist/apps/${app}/ /usr/share/nginx/html
