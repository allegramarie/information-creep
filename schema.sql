DROP DATABASE IF EXISTS articlesDB;

CREATE DATABASE articlesDB;

\c articlesDB;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username varchar(50) NOT NULL,
date date, 
image varchar(500) NOT NULL,
private_article_id int,
UNIQUE (USERNAME)
);

CREATE TABLE articles (
id SERIAL PRIMARY KEY,
title varchar(500) NOT NULL,
author varchar(500) NOT NULL,
url varchar(500) NOT NULL,
description varchar(100) NOT NULL,
date date,
private boolean not null,
saved_by_id int,
UNIQUE (URL)
);

CREATE TABLE tags (
id SERIAL PRIMARY KEY,
name varchar(100) NOT NULL,
UNIQUE (NAME)
)

-- setting up postgreSQL:
-- start postgres: pg_ctl -D /usr/local/var/postgres start && brew services start postgresql
-- create database: CREATE DATABASE databasename;
-- to import schema, run psql -f schema.sql
-- run 'psql articlesDB' to run psql with the database
--run \list to see all databases
-- stop postgres: pg_ctl -D /usr/local/var/postgres stop && brew services stop postgresql
-- more commands: https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546