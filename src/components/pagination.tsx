/* eslint-disable @stylistic/max-len */
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
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
          Página {props.pageIndex + 1} de {pages}
        </span>
        <div className="flex items-center gap-2">
          <Button
            onClick={ () => props.onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.pageIndex > 1}
          >
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(props.pageIndex - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.pageIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(props.pageIndex + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.pageIndex === pages - 1}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button
            onClick={() => props.onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={props.pageIndex < pages - 2}
          >
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
