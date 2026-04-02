# Deploy: portfolio on VPS (Traefik)

Source repository: **[github.com/marloxxx/portfolio](https://github.com/marloxxx/portfolio)**.

Deployment uses **Docker Compose** with **Traefik** labels: attach the app to an external Docker network named **`proxy`**, TLS on **`websecure`** with resolver **`letsencrypt`**, and a **local multi-stage** image build (no container registry).

**Hostname in use:** **horas-code.my.id** (set in `docker-compose.yml`).

---

## From clone to deploy (VPS)

Run everything below **on the VPS** over SSH.

### Before you start (one-time per server)

1. **DNS** — Point **horas-code.my.id** at this server’s **public IP** (**A** / **AAAA**). Do this before the first HTTPS request so Let’s Encrypt can validate (ports **80** and **443** must reach Traefik).

2. **Traefik and `proxy` network** — Traefik must be running (Docker provider enabled) with **`websecure`** and a cert resolver named **`letsencrypt`**, matching the labels in `docker-compose.yml`. The external network **`proxy`** must exist so this stack can join it:

   ```bash
   docker network ls | grep proxy
   ```

   If nothing creates that network yet, create it once: `docker network create proxy` — or define it in the same compose setup as Traefik, consistent with how your server is managed.

### Steps: clone → build → run

1. **Create the apps directory and clone the repository**

   ```bash
   sudo mkdir -p /opt/apps
   sudo chown "$USER":"$USER" /opt/apps
   cd /opt/apps
   git clone https://github.com/marloxxx/portfolio.git portfolio
   cd portfolio
   ```

   Layout must be: **`Dockerfile`**, **`package.json`**, and **`docker-compose.yml`** at the repo root.

2. **Build the Docker image and start the stack**

   ```bash
   docker compose build
   docker compose up -d
   ```

   The first build may take several minutes (`npm ci` + `next build`).

3. **Verify**

   ```bash
   docker compose ps
   docker compose logs -f web
   ```

   Open **https://horas-code.my.id**. If the certificate is not ready yet, wait briefly and refresh.

---

## After you push new code

On the VPS:

```bash
cd /opt/apps/portfolio
git pull
docker compose build
docker compose up -d
```

No `.env` file is required for Traefik routing; the host rule is fixed in `docker-compose.yml`.

---

## What `docker-compose.yml` configures

| Item | Value |
|------|--------|
| Service | `web` → image `portfolio-web:local` |
| Traefik | Host rule for **horas-code.my.id** |
| Entrypoint / TLS | `websecure`, `letsencrypt` |
| App port | `3000` (Next.js standalone) |
| Network | `proxy` (external) |

---

## Docker image (multi-stage)

The repo root **`Dockerfile`** uses four stages: **base** → **deps** (`npm ci`) → **builder** (`next build`) → **runner** (`node server.js` standalone). **`next.config.js`** must keep **`output: 'standalone'`**.

---

## GitHub Actions

The workflow **lints** and runs **`next build`** on push/PR to `main`. It does **not** push Docker images; the VPS builds from the cloned repo.

---

## Related files

| File | Purpose |
|------|--------|
| `docker-compose.yml` (repo root) | Traefik labels + local build |
| `Dockerfile` (repo root) | Multi-stage production image |
| `VPS_PRODUCTION_BRIEF.md` | Older playbook (different flow) |

To use a **different hostname**, change the `traefik.http.routers.portfolio.rule` label in `docker-compose.yml`, update DNS, then run **`docker compose up -d`** again.
