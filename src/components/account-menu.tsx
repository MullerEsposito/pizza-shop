/* eslint-disable @stylistic/max-len */
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { getProfileService } from '@/api/get-profile'
import { getManagedRestaurantService } from '@/api/get-managed-restaurant'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileService,
  })

  const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurantService,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          {isManagedRestaurantLoading
            ? <Skeleton className="h-4 w-40" />
            : managedRestaurant?.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          {isProfileLoading
            ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
              )
            : (
              <>
                <span>
                  {profile?.name}
                </span>
                <span className="text-sm font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
              )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="h-4 w-4 mr-2" />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="h-4 w-4 mr-2 text-rose-500 dark:text-rose-400" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
