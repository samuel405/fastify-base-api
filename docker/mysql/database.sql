# create databases
CREATE DATABASE IF NOT EXISTS `fastify_api`;

# create root user and grant rights
GRANT ALL ON *.* TO 'root'@'%';