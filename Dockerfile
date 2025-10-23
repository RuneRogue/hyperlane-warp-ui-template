# Use Node.js 22 (recommended for Next.js 13+)
FROM node:22-alpine AS builder

WORKDIR /app

# Install git and bash (needed for yarn to fetch git deps)
RUN apk add --no-cache git bash

# Enable Corepack so Yarn 4.x works
RUN corepack enable

# Install dependencies
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn
RUN yarn install --immutable

# Copy source
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV NEXT_PUBLIC_WALLET_CONNECT_ID=395a56931b7af7e87e7e191eb8dbb17e

# Build Next.js
RUN yarn build

# -------------------------------
# Production image
# -------------------------------
FROM node:22-alpine AS runner

WORKDIR /app

RUN apk add --no-cache bash

# Enable Corepack
RUN corepack enable

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy artifacts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml

# Expose port
EXPOSE 3000

CMD ["yarn", "start"]