import { api } from "@/lib/axios";

export interface GetDailyRevenueInPeriodProps {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodProps) {
  const result = await api.get<GetDailyRevenueInPeriodResponse[]>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      }
    }
  )  

  return result.data
}

export interface GetDailyRevenueInPeriodResponse {
  date: string
  receipt: number
}