import { http, HttpResponse } from "msw";
import { GetOrderDetailsProps, GetOrderDetailsResponse } from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsProps,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      email: 'mulleresposito@hotmail.com',
      name: 'Müller Esposito',
      phone: '81237127123',    
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza',
        }
      },
      {
        id: 'order-item-2',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Coca-Cola',
        }
      }
    ]
  })
})