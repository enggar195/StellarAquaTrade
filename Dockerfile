FROM node:24-alpine AS dependencies
RUN corepack enable && corepack prepare pnpm@11.0.0 --activate
WORKDIR /app
COPY package.json ./
RUN pnpm install --no-frozen-lockfile

FROM node:24-alpine AS builder
ARG NEXT_PUBLIC_STELLAR_NETWORK=testnet
ARG NEXT_PUBLIC_STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
ARG NEXT_PUBLIC_STELLAR_FRIENDBOT_URL=https://friendbot.stellar.org
ARG NEXT_PUBLIC_STELLAR_EXPLORER_URL=https://stellar.expert/explorer/testnet
ENV NEXT_PUBLIC_STELLAR_NETWORK=$NEXT_PUBLIC_STELLAR_NETWORK
ENV NEXT_PUBLIC_STELLAR_HORIZON_URL=$NEXT_PUBLIC_STELLAR_HORIZON_URL
ENV NEXT_PUBLIC_STELLAR_FRIENDBOT_URL=$NEXT_PUBLIC_STELLAR_FRIENDBOT_URL
ENV NEXT_PUBLIC_STELLAR_EXPLORER_URL=$NEXT_PUBLIC_STELLAR_EXPLORER_URL
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare pnpm@11.0.0 --activate
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:24-alpine AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
