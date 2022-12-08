# Backend/FullStack Assessment
Assessment for Krane SWE role

## Technical Details
Find API Endpoints under `./client/src/commons/constants/index.ts`
```
UPLOAD_POST: "/api/post"
GET_POSTS: "/api/post"
```

Client-side `UPLOAD_POST` payload: 
```
title: title,
text_body: body,
```

Expected returns
`GET_POSTS` should return an array of posts `{Record[]}`
`UPLOAD_POST` should return the newly created post `{Record}`

Migrations + Prisma has already been setup :)
## Available scripts
### Before running the project
`npm install`  
`cd ./server && npx prisma generate` (after renaming the `.env` below)
### To run the project
`npm run start`
Concurrently run server and client

## Postgres Setup
```
1. brew install postgresql
2. brew services start postgresql
    a) brew services stop postgresql (to stop Postgres
3. psql postgres
    a) create database krane;
    b) create user root with encrypted password 'password';
    c) grant all privileges on database krane to root;
4. psql -d krane -U root
    a) Can get connection info via `\conninfo`
    b) Read relations via `\dt`
```

Rename `./server/.env.example` to `./server/.env`
