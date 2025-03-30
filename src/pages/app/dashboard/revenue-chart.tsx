/* eslint-disable @stylistic/max-len */
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2300 },
  { date: '15/12', revenue: 800 },
  { date: '16/12', revenue: 640 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="pb-8 space-y-0">
        <CardTitle>Receita no período</CardTitle>
        <CardDescription>Receita diária no período</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BT', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            />
            <XAxis dataKey="date" dy={8} />
            <Line
              type="linear"
              dataKey="revenue"
              strokeWidth={2}
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
