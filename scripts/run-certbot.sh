#!/bin/sh
docker compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d bitwise.untilov.com.ua