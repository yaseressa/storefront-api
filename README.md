# store-front API

an api for a store built as a udacity project.

### Installation

`yarn` or `npm i`

#### Packages

- express
- db-migrate
- typescript
- cors
- bcrypt
- jsonwebtoken
- supertest
- jasmine
- nodemon

### Database configurations

- connect to the default postgres database as the server's root user `psql -U postgres`
- first run below code to create a user:
  - `CREATE USER shopping_user WITH PASSWORD 'password123';`
- second run below code to create the dev db:
  - `CREATE DATABASE shopping;`
- Connect to the dev and grant all privileges tp the created user:
  - `\c shopping`
  - `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

- create tables
  `npx db-migrate up`
- drop tables
  `npx db-migrate down`

!['migrate database'](./docs/migrate_up.png)

## .ENV file contents

```
DB_NAME=shopping
DB_PASS=password123
DB_HOST=127.0.0.1
DB_USER=shopping_user
SALT_ROUNDS=10
BCRYPT_PASSWORD=yaser123
TOKEN_SECRET=ys
TOKEN_TEST=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo4NSwiZmlyc3RuYW1lIjoiQW1tYXIiLCJsYXN0bmFtZSI6Iklzc2EiLCJwYXNzd29yZCI6IiQyYiQxMCROQTV6LzRlMFhIcTk3YkVFM2hha2dlWnlJZmU3dWpjZFMyY29XVHJnR0drU0hTdExLODRPaSJ9LCJpYXQiOjE2NzU2MTUxNDV9.hFOmSOFEyuPlSc7_ZwD5pQWLypvC0YOOYLXvL9MegLQ
```

## Start App

`npm run watch`

## Endpoint Access

All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file.

## Testing

Run test with

`npm test`
