#!/bin/sh

echo "⏳ Aguardando PostgreSQL subir (via Bun)..."
bun src/utils/wait-for-db.ts

echo "📦 Rodando migrations..."
bun migrate

echo "🌱 Rodando seeds..."
bun seed

echo "🚀 Iniciando servidor Bun..."
bun run dev
