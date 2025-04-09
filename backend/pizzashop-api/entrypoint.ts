import { $ } from 'bun'

// start.ts
await import('./src/utils/wait-for-db.ts')

console.log('Rodando migrations...')
await $`bun run migrate`

console.log('Rodando seeds...')
await $`bun run seed`

console.log('Iniciando servidor Bun...')
await $`bun run dev`
