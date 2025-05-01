import { api } from "@/lib/axios";

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>('/metrics/month-orders-amount')

  return response.data
}

export interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}