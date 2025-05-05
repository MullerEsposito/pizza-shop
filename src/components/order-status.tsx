/* eslint-disable no-redeclare */
type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {status === 'pending' &&
        <span className="h-2 w-2 rounded-full bg-slate-400" />}

      {status === 'canceled' &&
        <span className="h-2 w-2 rounded-full bg-rose-500" />}

      {status === 'delivered' &&
        <span className="h-2 w-2 rounded-full bg-emerald-500" />}

      {['processing', 'delivering'].includes(status) &&
        <span className="h-2 w-2 rounded-full bg-amber-500" />}

      <span className="">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparação',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}
