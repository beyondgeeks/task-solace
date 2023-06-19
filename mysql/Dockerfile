# Dockerfile for MySQL
FROM mysql:latest

# Copy the SQL file to initialize the database (if needed)
# COPY init.sql /docker-entrypoint-initdb.d/

# Expose the desired port (e.g., 3306) for MySQL
EXPOSE 3306

# Set any additional MySQL configurations (if needed)
# Example: COPY my.cnf /etc/mysql/conf.d/
COPY ./init.sql /docker-entrypoint-initdb.d/init.sql