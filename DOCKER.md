# Dockerization

Build and run both services with Docker Compose:

```bash
docker compose up --build
```

This builds images and starts:
- backend -> http://localhost:3000
- frontend -> http://localhost:5173 (nginx serves the built Vite `dist` on container port 80)

Run detached:

```bash
docker compose up -d --build
```

Stop and remove containers:

```bash
docker compose down
```

Notes
- The backend reads `FRONTEND_URL` (or `CORS_ORIGIN`) to set the allowed CORS origin. You can change it in `docker-compose.yml` or provide an env file.
- If your Docker uses the old `docker-compose` CLI, use `docker-compose` instead of `docker compose`.
