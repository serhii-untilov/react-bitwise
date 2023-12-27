FROM nginx
COPY sites-enabled/ /etc/nginx/sites-enabled
COPY nginx.conf /etc/nginx/
VOLUME /etc/nginx/sites-enabled/
EXPOSE 80/tcp
CMD ["nginx", "-g", "daemon off;"]