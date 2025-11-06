# ----------------------------------------------------
    # Stage 0: Base Image Definition
    # ----------------------------------------------------
    FROM node:22-alpine AS base
    
    # ----------------------------------------------------
    # Stage 1: Dependency Installation (deps)
    # ----------------------------------------------------
    FROM base AS deps
    # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine  to understand why I am installing libc6-compact
    RUN apk add --no-cache libc6-compat
    
    WORKDIR /app

    COPY package*.json ./
    RUN npm ci
    
    # ----------------------------------------------------
    # Stage 2: Builder (builder)
    # ----------------------------------------------------
    FROM base AS builder
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules

    ARG NEXT_PUBLIC_API_URL

    ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-"Value_Was_Not_Set"}
    ENV NODE_ENV=production

    COPY . .
    RUN npm run build
    
    # Production Image
    FROM base AS runner
    WORKDIR /app
    
    ENV NODE_ENV="production"
    RUN npm install -g pm2
    
    RUN addgroup -g 1001 -S binary
    RUN adduser -S binary -u 1001
    
    COPY prod.ecosystem.config.js ./ecosystem.config.js

    COPY --from=builder /app/public ./public
    COPY --chown=binary:binary --from=builder /app/.next/standalone ./
    COPY --chown=binary:binary --from=builder /app/.next/static ./.next/static
    
    RUN chown -R binary:binary /app
    
    USER binary

    EXPOSE 3000
    
    ENV PORT=3000
    
    CMD ["pm2-runtime", "ecosystem.config.js"]