/* eslint-disable @stylistic/max-len */
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './ui/button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination(props: PaginationProps) {
  const pages = Math.ceil(props.totalPages / props.perPage) || 1

  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">
        Total de {props.totalPages} item(s)
      </span>
      <div className="flex items-center gap-6">
        <span className="text-sm font-medium">
          Página {props.currentPage + 1} de {pages}
        </span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => props.onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.currentPage <= 1}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(props.currentPage - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(props.currentPage + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.currentPage >= pages - 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.currentPage >= pages - 2}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
