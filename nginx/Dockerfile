FROM nginx
# COPY sites-enabled/ /etc/nginx/sites-enabled
COPY nginx.conf /etc/nginx/
# VOLUME /etc/nginx/sites-enabled/
VOLUME /etc/nginx/conf.d/
EXPOSE 8080/tcp
EXPOSE 4430/tcp
CMD ["nginx", "-g", "daemon off;"]