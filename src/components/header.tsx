import { Separator } from '@radix-ui/react-separator'
import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { NavLink } from './nav-links'
import { ModeToggle } from './theme/mode-toggle'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 gap-6 px-6 items-center">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex space-x-4 lg:space-x-6 items-center">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
