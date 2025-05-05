import { http, HttpResponse} from 'msw'
import { SignInServiceBody } from '../sign-in'

export const signInMock = http.post<never, SignInServiceBody>(
  '/authenticate', async ({ request }) => {
    const { email } = await request.json()

    if (email === 'mulleresposito@hotmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: { 'Set-Cookie': 'auth=sample-jwt'}
      })
    }

    return new HttpResponse(null, { status: 401 })
  }
)