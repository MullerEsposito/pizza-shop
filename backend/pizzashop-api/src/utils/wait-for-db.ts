import { Client } from 'pg'
import { setTimeout } from 'timers/promises'

console.log('⏳ Aguardando PostgreSQL subir...')

const MAX_RETRIES = 10

for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
  try {
    const client = new Client({
      connectionString: process.env.DB_URL,
    })

    await client.connect()
    await client.end()

    console.log('✅ PostgreSQL está pronto!')
    break
  } catch (err) {
    console.log(`❌ Tentativa ${attempt} falhou, tentando novamente em 2s...`)
    if (attempt === MAX_RETRIES) {
      console.error('🛑 Não foi possível conectar ao PostgreSQL')
      process.exit(1)
    }

    await setTimeout(2000)
  }
}
