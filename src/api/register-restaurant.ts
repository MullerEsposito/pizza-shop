import { api } from '@/lib/axios'

export interface RegisterRestaurantServiceBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurantService(
  register: RegisterRestaurantServiceBody,
) {
  await api.post('/restaurants', register)
}
