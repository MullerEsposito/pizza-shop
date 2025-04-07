/* eslint-disable promise/param-names */
// src/utils/wait-for-db.ts
import { Client } from 'pg'

const config = {
  host: process.env.POSTGRES_HOST || 'postgres',
  user: process.env.POSTGRES_USER || 'docker',
  password: process.env.POSTGRES_PASSWORD || 'docker',
  database: process.env.POSTGRES_DB || 'pizzashop',
  port: 5432,
}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

async function waitForPostgres(retries = 20) {
  while (retries > 0) {
    try {
      const client = new Client(config)
      await client.connect()
      await client.end()
      console.log('✅ PostgreSQL está pronto!')
      return
    } catch (err) {
      console.log('⏳ Aguardando PostgreSQL subir...')
      retries--
      await sleep(2000)
    }
  }
  console.error('❌ PostgreSQL não respondeu a tempo. Abortando.')
  process.exit(1)
}

waitForPostgres()
