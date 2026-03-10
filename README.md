# NestJS Auth API

A clean authentication API built with NestJS, Prisma, PostgreSQL, and JWT.

## Features

- NestJS modular architecture (`auth` + `users` modules)
- PostgreSQL database
- Prisma ORM
- JWT authentication (access + refresh tokens)
- Built-in Auth UI at `/` for quick manual testing
- `bcrypt` password hashing
- DTO validation using `class-validator`
- Global validation pipe
- Global exception handling filter
- Swagger API documentation
- Dockerized API and PostgreSQL services

## Project Structure

```text
src/
  auth/
  users/
  prisma/
  common/
prisma/
  schema.prisma
```

## Prerequisites

- Node.js 20+
- npm
- Docker (recommended for PostgreSQL)

## Environment Setup

Create `.env` in the project root:

```env
PORT=3000

POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=auth_db
POSTGRES_PORT=5432

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/auth_db?schema=public"

JWT_ACCESS_SECRET=super_access_secret_change_me
JWT_REFRESH_SECRET=super_refresh_secret_change_me
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL=7d
```

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start PostgreSQL:

```bash
docker compose up -d postgres
```

3. Sync database schema:

```bash
npx prisma db push
```

4. Start the app in development mode:

```bash
npm run start:dev
```

API will run at `http://localhost:3000`.

Auth UI is available at:

- `http://localhost:3000/`

## Swagger Docs

After starting the API, open:

- `http://localhost:3000/docs`

## Docker Setup

1. Make sure `.env` exists (see **Environment Setup** above).

2. Start API + PostgreSQL:

```bash
docker compose up --build
```

Services:

- API: `http://localhost:3000`
- PostgreSQL: `localhost:5432`

## API Endpoints

### Auth

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/refresh`

### Users

- `GET /users/me` (protected with Bearer token)

## Sample Request Bodies

### Register / Login

```json
{
  "email": "john@example.com",
  "password": "StrongPass123"
}
```

### Refresh

```json
{
  "refreshToken": "<your_refresh_token>"
}
```

## Authentication Flow

1. Register or login to receive `accessToken` and `refreshToken`.
2. Use `accessToken` in `Authorization: Bearer <token>` header for protected routes.
3. Use `refreshToken` on `/auth/refresh` to get new tokens.

## Useful Commands

```bash
npm run build
npm run start:prod
npm run prisma:studio
npm run prisma:deploy
```
