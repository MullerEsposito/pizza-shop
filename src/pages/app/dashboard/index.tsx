/* eslint-disable @stylistic/max-len */
import { SuperSEO } from 'react-super-seo'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthOrdersCanceledAmountCard } from './month-orders-canceled-amount-card'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products-chart'

export function Dashboard() {
  return (
    <>
      <SuperSEO title="Dashboard | pizza.shop" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthOrdersCanceledAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
