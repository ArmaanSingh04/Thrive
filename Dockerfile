FROM node:20-alpine

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

ARG BOT_TOKEN
ENV BOT_TOKEN=$BOT_TOKEN

ARG GEMINI_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY

RUN npm install -g pnpm
RUN pnpm install

COPY . .
CMD ["pnpm" , "prod"]