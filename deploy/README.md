# Deploy: Portfolio on VPS with Traefik

This app fits into the [VPS Production Brief](VPS_PRODUCTION_BRIEF.md): multi-project, Docker network `web`, Traefik, and Watchtower for auto deploy.

## One-time VPS setup

1. **Phase 1–2:** Harden VPS, install Docker, create network:
   ```bash
   docker network create web
   ```

2. **Phase 4 layout:** Create app directory:
   ```bash
   sudo mkdir -p /opt/apps/portfolio
   cd /opt/apps/portfolio
   ```

3. **Copy `docker-compose.yml`** from this folder. Edit:
   - Replace `YOUR_GITHUB_USERNAME` with your GitHub username (image: `ghcr.io/<username>/portfolio:latest`).
   - Replace `yourdomain.com` with your domain.

4. **GHCR:** After the first CI push, set the package to **Public** in GitHub Packages so the VPS can pull without auth. For private repos, run `docker login ghcr.io` on the VPS (e.g. with a PAT).

5. **Phase 5 — Watchtower:** Run Watchtower on the VPS so it pulls new images and restarts containers (see [VPS_PRODUCTION_BRIEF.md](VPS_PRODUCTION_BRIEF.md)). No SSH deploy step needed from CI.

6. **Start the app:**
   ```bash
   cd /opt/apps/portfolio
   docker compose up -d
   ```

## GitHub Actions (CI only; deploy via Watchtower)

Repo: **Settings → Secrets and variables → Actions.**

This project’s workflow only **builds and pushes** the image to GHCR. Deploy is done by **Watchtower** on the VPS (no SSH secrets required for deploy).

| Secret | Required for CI? | Description |
|--------|------------------|-------------|
| `SSH_PRIVATE_KEY` | No (Watchtower flow) | Only if you add a manual SSH deploy step later |
| `VPS_HOST` | No | — |
| `VPS_USER` | No | — |

No repo secrets needed for the default “build + push; Watchtower updates” flow.

## Deploy flow

1. **git push** to `main`
2. GitHub Actions: install → lint → build → build Docker image → push to GHCR.
3. **Watchtower** on the VPS sees the new image and runs pull + restart for the portfolio container.

Ensure Traefik (Phase 2) is running with Docker provider and certificate resolver (e.g. `letsencrypt`) so labels on this stack are picked up.

## Optional: SSH deploy instead of Watchtower

If you prefer CI to deploy via SSH instead of Watchtower, add a deploy job that SSHs and runs `docker compose pull && docker compose up -d` in `/opt/apps/portfolio`, and set secrets `SSH_PRIVATE_KEY`, `VPS_HOST`, `VPS_USER`. The current workflow is kept minimal (build + push only) to match the brief.
