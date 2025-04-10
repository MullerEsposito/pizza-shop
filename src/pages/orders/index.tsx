import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SuperSEO } from 'react-super-seo'
import { OrderTableRow } from './order-table-row'
import { OrderTableFilters } from './order-table-filters'
import { Pagination } from '@/components/pagination'
import { getOrders } from '@/api/get-orders'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  const handlePaginate = (pageIndex: number) => {
    setSearchParams(state => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <>
      <SuperSEO title="Orders | pizza.shop" />
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      <div className="space-y-2.5">
        <OrderTableFilters />
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]" />
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]" />
                <TableHead className="w-[132px]" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {result && result.orders.map(order => (
                <OrderTableRow key={order.orderId} order={order} />
              ))}
            </TableBody>
          </Table>
        </div>

        {result && (
          <Pagination
            onPageChange={handlePaginate}
            currentPage={result.meta.pageIndex}
            totalPages={result.meta.totalCount}
            perPage={result.meta.perPage}
          />
        )}
      </div>
    </>
  )
}
