#!/bin/sh
npm run build
npm test
docker compose up --detach --force-recreate