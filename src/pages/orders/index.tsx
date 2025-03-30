import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SuperSEO } from "react-super-seo";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";

export function Orders() {
  
  return (<>
    <SuperSEO title="Orders | pizza.shop" />
    <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    <div className="space-y-2.5">
      <OrderTableFilters />
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[64px]"></TableHead>
              <TableHead className="w-[140px]">Identificador</TableHead>
              <TableHead className="w-[180px]">Realizado há</TableHead>
              <TableHead className="w-[140px]">Status</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="w-[140px]">Total do pedido</TableHead>
              <TableHead className="w-[164px]"></TableHead>
              <TableHead className="w-[132px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <OrderTableRow key={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </>)
}