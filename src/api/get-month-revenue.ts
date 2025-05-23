import { api } from "@/lib/axios";

export async function getMonthRevenue() {
    const response = await api.get<GetMonthRevenueResponse>('/metrics/month-receipt')

    return response.data
}

export interface GetMonthRevenueResponse {
    receipt: number
    diffFromLastMonth: number
}