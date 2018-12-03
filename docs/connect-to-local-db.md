# How to run your app in the local database

The local database is hosted into a docker container to facilitated portability and automate deployement.

## Requirements

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

## Run the postgres database engine and pgadmain

```bash
docker-compose up -d postgres pgadmin
```

## Explore data from PgAdmin4

- Navigate to [localhost:8001](http://localhost:8001)
- Input the following login params
  - Login: williamdekou@gmail.com
  - password: `pgadmin`
- Connect it to postgresql to view our data
  - Register a postgresql server
  - Set connection host to `postgres`
  - Set Postgress username to `postgres`
  - Set Postgress password to `postgres`

## Enjoy

**You can now see the data created from the SendIT application**

## Stop the Database engine

```bash
docker-compose down
```
