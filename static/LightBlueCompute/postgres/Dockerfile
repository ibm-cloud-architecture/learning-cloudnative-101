FROM library/postgres
COPY scripts/load-data.sql /docker-entrypoint-initdb.d/

EXPOSE 5432:5432
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres

