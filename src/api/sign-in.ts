import { api } from '@/lib/axios'

export interface SignInServiceBody {
  email: string
}

export async function signInService({ email }: SignInServiceBody) {
  await api.post('/authenticate', { email })
}
