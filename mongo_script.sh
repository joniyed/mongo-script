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
#AUTH_PARAM="--username=${MONGO_USER} --password=${MONGO_PASSWORD} --authenticationDatabase admin"

#mongorestore --db oushodsheba_pharmacy PMS_DB_PATH --drop
mongorestore --host ${MONGO_HOST} --port ${MONGO_PORT} --db oushodsheba_pharmacy ${AUTH_PARAM} ${PMS_DB_PATH} --drop

echo
echo
echo
echo '====================================================================================='
echo '                              DB Restoring Completed                                       '
echo '====================================================================================='
echo
echo
echo

# mongo < test.js
mongo --port 27017 -u "" -p "" --authenticationDatabase "" < test.js
mongo --port 27017 -u "" -p "" --authenticationDatabase "" < mongo.js
# mongo --port 27017 < mongo.js

# mongodump--db oushodsheba_pharmacy--out backup / `date +"%m-%d-%y"+"-final"`
