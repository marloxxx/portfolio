# VPS Production Brief — Full Roadmap

Target: 1 VPS, Docker-based, Traefik, multi-project, CI/CD auto deploy, monitoring, backup. Production mindset without overkill. Suitable for 3–5 applications.

---

## Phase 0 — Target Architecture

```
Internet
   ↓
Traefik (HTTPS + routing)
   ↓
Docker Network (web)
   ├── Portfolio (Next.js)
   ├── ERP API
   ├── Gateway
   ├── Redis
   ├── PostgreSQL
   ├── Portainer
   ├── Watchtower
   └── Monitoring (Prometheus/Grafana)
```

- All services containerised.
- No control-panel hosting; everything via Docker + Traefik.

---

## Phase 1 — Base Infrastructure (Day 1)

### 1. VPS Hardening

- Ubuntu 22.04
- Update system
- UFW: allow 22, 80, 443
- Disable root login
- SSH key only
- Fail2ban

**Output:** VPS secured and ready for production.

### 2. Install Docker

- Install Docker Engine
- Install Docker Compose plugin (v2)
- Create global network:

```bash
docker network create web
```

**Output:** Ready to run containers.

---

## Phase 2 — Reverse Proxy Layer

### 3. Setup Traefik (Core Layer)

**Path on VPS:** `/opt/core/traefik`

- Entrypoints: 80 and 443
- Auto Let's Encrypt (ACME)
- Docker provider enabled
- `acme.json` permission 600

**Test:** Deploy a dummy container with Traefik labels; confirm SSL is issued.

**Output:** Auto HTTPS and routing.

---

## Phase 3 — First App Deployment

### 4. Deploy First App (e.g. Portfolio Next.js)

- Multi-stage Dockerfile
- Own `docker-compose.yml` per app
- Traefik labels for host and TLS
- No port published on host (Traefik only)
- External network: `web`

**Test:** Domain resolves, HTTPS works, container restart is safe.

**Output:** One production-ready app.

---

## Phase 4 — Multi-Project Structure

**Final directory layout:**

```
/opt/
├── core/
│   └── traefik/
├── apps/
│   ├── portfolio/
│   ├── erp-api/
│   ├── gateway/
│   └── ...
└── volumes/
```

- Each app: own `docker-compose.yml` and env; start/stop independently.
- All apps attach to external network `web` so Traefik can route to them.

**Output:** Modular, multi-project layout.

---

## Phase 5 — CI/CD (Auto Deploy)

**Tool:** GitHub Actions + Watchtower.

**Flow:**

```
git push
   → Build image
   → Push to registry (e.g. GHCR)
   → Watchtower on VPS detects new image
   → Auto update container
```

- No manual SSH for routine deploys.
- All projects can follow the same pattern.

**Output:** Auto deploy on push.

---

## Phase 6 — GUI & Management

**Tool:** Portainer.

- View containers and logs
- Restart services
- Deploy stacks via UI

**Output:** GUI management without a traditional hosting control panel.

---

## Phase 7 — Monitoring

**Minimum:** CPU, RAM, disk, container status (e.g. via Portainer or host tools).

**Optional:** Prometheus + Grafana + alerts (e.g. Telegram).

**Output:** Visibility into production.

---

## Phase 8 — Backup Strategy

**Minimum:**

- Daily DB backups
- Backup important volumes to e.g. `/opt/volumes/backups`
- Optional: sync backups to S3 or another remote store

**Test:** Simulate restore.

**Output:** Disaster recovery readiness.

---

## Phase 9 — Security Hardening

- Rate limiting via Traefik middleware
- Basic auth for dashboards (Traefik or app-level)
- Run containers as non-root where possible
- Do not expose DB ports to the internet
- Restrict file permissions (e.g. `.env` 600)

**Output:** Production-grade security baseline.

---

## Result

- Multi-project, modular setup
- Auto HTTPS (Traefik + Let's Encrypt)
- Auto deploy (GitHub Actions + Watchtower)
- GUI management (Portainer)
- Monitoring and backup
- No control panel, no Kubernetes

**Rough effort:** Phase 1–3 (1 day), Phase 4–5 (1 day), Phase 6–7 (1 day), Phase 8–9 (0.5–1 day). Total about 3–4 days for a clean setup. After that, deploy is effectively “git push”.

This repo’s `deploy/` folder and GitHub Actions are set up to fit this architecture (e.g. portfolio under `/opt/apps/portfolio`, `web` network, Watchtower-based updates). See [deploy/README.md](README.md).
