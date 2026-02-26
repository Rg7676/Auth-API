# NestJS Auth API

A clean authentication API built with NestJS, Prisma, PostgreSQL, and JWT.

## Features

- NestJS modular architecture (`auth` + `users` modules)
- PostgreSQL database
- Prisma ORM
- JWT authentication (access + refresh tokens)
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
- PostgreSQL (if running locally)

## Environment Setup

1. Copy env file:

```bash
cp .env.example .env
```

2. Update values in `.env` if needed.

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Generate Prisma client:

```bash
npm run prisma:generate
```

3. Run database migrations:

```bash
npm run prisma:migrate -- --name init
```

4. Start the app in development mode:

```bash
npm run start:dev
```

API will run at `http://localhost:3000`.

## Swagger Docs

After starting the API, open:

- `http://localhost:3000/docs`

## Docker Setup

1. Copy env file:

```bash
cp .env.example .env
```

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
