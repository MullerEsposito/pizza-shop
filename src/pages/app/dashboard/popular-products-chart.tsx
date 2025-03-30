/* eslint-disable @stylistic/max-len */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import { pieLabelConfig } from './helpers/pie-label-config'
import colors from 'tailwindcss/colors'

const data = [
  { product: 'Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 30 },
  { product: 'Marguerita', amount: 50 },
  { product: '4 Queijos', amount: 16 },
  { product: 'Frango frito', amount: 26 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex items-center justify-between pb-8">
        <CardTitle>Produtos populares</CardTitle>
        <BarChart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              innerRadius={64}
              outerRadius={86}
              strokeWidth={8}
              labelLine={false}
              label={props => pieLabelConfig({ ...props, data })}
            >
              {data.map((_, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={COLORS[idx]}
                  className="stroke-background hover:opacity-80 transition-all duration-300"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
