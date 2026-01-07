FROM node:20-alpine

WORKDIR /app

# Copier package.json et installer dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Port Vite/React
EXPOSE 5173

# Commande de démarrage
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
