**Checkpoint — Database configuration progress**

- **Summary:** Repository scaffolded with `backend/` and `frontend/`. Database is not yet configured; this note outlines planned steps to connect and configure a persistent database and how front and back will interact.

**Backend DB Tasks**

- **Goal:** Establish a reliable database connection and provide CRUD API endpoints for habits.
- **Install & Choose:** Add a DB client/ORM (e.g., `pg` + `knex`, `sequelize`, or `prisma`) and choose Postgres (recommended) or SQLite for quick local dev.
- **Connection:** Add environment-driven connection string (`DATABASE_URL`) and implement connection logic in `backend/index.js` (or a new `db.js`).
- **Migrations & Seeds:** Create migrations and basic seed data for the `habits` table/collection.
- **API:** Implement and test REST endpoints (create, read, update, delete) that persist to the DB.
- **Testing:** Verify connection and endpoints locally; add simple integration test or a smoke-check endpoint.

**Frontend Tasks**

- **Goal:** Consume backend APIs to display and manage habits stored in the DB.
- **API Service:** Configure `frontend/services/api.js` to use an environment-driven API base URL (e.g., `VITE_API_BASE_URL`).
- **Data Flow:** Update components to fetch habit lists on load, create/update/delete habits via API, and reflect server state in UI.
- **Offline / UX:** Add loading/error handling and optimistic UI patterns as needed; consider local caching for better UX.

**DB Configuration & Deployment Notes**

- **Local Dev:** Use a `.env` file with `DATABASE_URL` (or a `docker-compose` Postgres service) and document the setup steps.
- **Secrets:** Keep credentials out of source control; use environment variables for all connection strings.
- **Environments:** Ensure separate connection strings for dev/staging/production and run migrations as part of deployment.
- **Backups & Migrations:** Plan migration strategy (migration tool) and database backups for production.

If you want, I can implement the backend DB connection and a minimal API endpoint next, then wire the frontend service to it.

