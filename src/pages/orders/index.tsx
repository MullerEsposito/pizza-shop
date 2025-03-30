import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { SuperSEO } from "react-super-seo";

export function Orders() {
  
  return (<>
    <SuperSEO title="Orders | pizza.shop" />
    <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    <div className="space-y-2.5">
      <form action="" className="flex items-center gap-2">
        <label htmlFor="filter" className="text-sm font-semibold">
          Filtros:
        </label>
        <Input id="filter" placeholder="Nome do cliente" className="h-8 w-[320px]" />
      </form>
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
              <TableRow key={index}>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  821e78f7asdhdf128h
                </TableCell>
                <TableCell className="text-muted-foreground">
                  há 15 minutos
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  Müller Esposito Nunes
                </TableCell>
                <TableCell className="font-medium">
                  R$ 149,90
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="xs">
                    <ArrowRight className="mr-2 h-3 w-3" />
                    Aprovar
                  </Button>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="xs">
                    <X className="mr-2 h-3 w-3" />
                    Cancelar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </>)
}