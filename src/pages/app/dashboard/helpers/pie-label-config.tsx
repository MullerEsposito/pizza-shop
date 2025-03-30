type Data = { product: string, amount: number }

interface PieLabelConfigProps {
  data: Data[]
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
  index: number
}

export const pieLabelConfig = ({
  data,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}: PieLabelConfigProps) => {
  const RADIAN = Math.PI / 180
  const radius = 12 + innerRadius + (outerRadius - innerRadius)
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      className="fill-muted-foreground text-xs"
      textAnchor={
        x > cx
          ? 'start'
          : 'end'
      }
      dominantBaseline="central"
    >
      {data[index].product.length > 12
        ? data[index].product.substring(0, 12).concat('...')
        : data[index].product}{' '}
      ({value})
    </text>
  )
}
