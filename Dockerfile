# --- Stage 1: base OS + libc for Alpine compatibility (e.g. sharp) ---
# Pin to current LTS; rebuild periodically so scanners pick up patched base layers
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat

# --- Stage 2: install npm dependencies (layer cached when lockfile unchanged) ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# --- Stage 3: compile Next.js ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Baked into the client/server bundle at build time; override when building for production
ARG NEXT_PUBLIC_APP_URL=http://localhost:3000
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}

RUN npm run build

# --- Stage 4: runtime (minimal) ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# No app `public/` in repo; standalone still resolves static files from .next/static. Empty dir avoids runtime ENOENT.
RUN mkdir -p public && chown nextjs:nodejs public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
