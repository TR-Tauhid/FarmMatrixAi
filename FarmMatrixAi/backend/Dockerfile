FROM node:22-alpine

WORKDIR /app

COPY FarmMatrixAi/backend/package*.json ./
RUN npm install

COPY FarmMatrixAi/backend .

EXPOSE 5000

CMD ["npm", "start"]