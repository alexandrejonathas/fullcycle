FROM mysql:5.7

ENV MYSQL_DATABASE nodedb

COPY ./database/ /docker-entrypoint-initdb.d/

EXPOSE 3306
  