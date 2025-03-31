import { api } from '@/lib/axios'

interface GetManagedRestaurantServiceResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurantService() {
  const response = await api.get<GetManagedRestaurantServiceResponse>(
    '/managed-restaurant',
  )

  return response.data
}
