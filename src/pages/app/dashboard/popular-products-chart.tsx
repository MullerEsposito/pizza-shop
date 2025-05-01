/* eslint-disable @stylistic/max-len */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { pieLabelConfig } from './helpers/pie-label-config'
import colors from 'tailwindcss/colors'
import { useQuery } from '@tanstack/react-query'
import { getPopularProducts } from '@/api/get-popular-products'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="flex items-center justify-between pb-8">
        <CardTitle>Produtos populares</CardTitle>
        <BarChart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {popularProducts ? (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={popularProducts}
                dataKey="amount"
                nameKey="product"
                innerRadius={64}
                outerRadius={86}
                strokeWidth={8}
                labelLine={false}
                label={props => pieLabelConfig({ ...props, data: popularProducts })}
              >
                {popularProducts.map((_, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={COLORS[idx]}
                    className="stroke-background hover:opacity-80 transition-all duration-300"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
