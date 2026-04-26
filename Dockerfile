FROM node:22-alpine
WORKDIR /app

# Invalide le cache à chaque déploiement
ARG CACHEBUST=1

# Mettre à jour les paquets Alpine pour réduire les CVEs
RUN apk upgrade --no-cache

# Installer toutes les dépendances (y compris devDeps nécessaires pour nest build)
COPY package*.json ./
RUN npm ci

# Générer le client Prisma
COPY prisma ./prisma
RUN npx prisma generate

# Copier le source et compiler TypeScript
COPY . .
RUN npm run build

# Supprimer les devDependencies après le build
RUN npm prune --omit=dev

ENV NODE_ENV=production
EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
