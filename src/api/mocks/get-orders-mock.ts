import { http, HttpResponse } from "msw";
import { GetOrdersResponse } from "../get-orders";

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = ['pending', 'canceled', 'processing', 'delivering', 'delivered']

const orders: Orders = Array.from({ length: 60}).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    customerName: `Customer ${i + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[i % 5],
  }
})

export const getOrdersMock = http.get<
  never,
  never,
  GetOrdersResponse
>('/orders', ({ request }) => {
  const { searchParams } = new URL(request.url)

  const pageIndex = searchParams.get('pageIndex')
    ? Number(searchParams.get('pageIndex'))
    : 0
  const status = searchParams.get('status') as OrderStatus | undefined
  const customerName = searchParams.get('customerName')
  const orderId = searchParams.get('orderId')

  let filteredOrders = orders

  if (status) {
    filteredOrders = orders.filter(order =>
     order.status === status
    )
  }

  if (customerName) {
    filteredOrders = filteredOrders.filter(order =>
      order.customerName.includes(customerName)
    )
  }

  if (orderId) {
    filteredOrders = filteredOrders.filter(order =>
     order.orderId.includes(orderId)
    )
  }

  const paginatedOrders = filteredOrders.slice(
    pageIndex * 10,
    pageIndex * 10 + 10
  )
  
  return HttpResponse.json({
    orders: paginatedOrders,
    meta: {
      pageIndex,
      perPage: 10,
      totalCount: orders.length,
    }
  })
})