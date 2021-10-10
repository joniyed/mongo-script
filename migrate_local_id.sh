#!/bin/bash

echo
echo
echo
echo '====================================================================================='
echo '                                  DB Restoring                                       '
echo '====================================================================================='
echo
echo
echo

PMS_DB_PATH="./oushodsheba_pharmacy/"

MONGO_HOST="localhost"
MONGO_PORT="27017"

MONGO_USER=""
MONGO_PASSWORD=""

AUTH_PARAM=""
mongo --port 27017 -u "" -p "" --authenticationDatabase "" < migrate_local_id.js