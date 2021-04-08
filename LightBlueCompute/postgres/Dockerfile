FROM library/postgres
COPY scripts/load-data.sql /docker-entrypoint-initdb.d/

ADD scripts/load-data.sh load-data.sh
ADD scripts/load-data.sql load-data.sql
RUN chmod u+x load-data.sh

CMD ["mysqld"]
