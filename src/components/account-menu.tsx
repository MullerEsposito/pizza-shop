/* eslint-disable @stylistic/max-len */
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProfileService } from '@/api/get-profile'
import { getManagedRestaurantService } from '@/api/get-managed-restaurant'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogTrigger } from './ui/dialog'
import { StoreProfileDialog } from './store-profile-dialog'
import { signOut } from '@/api/sign-out'
import { useNavigate } from 'react-router-dom'

export function AccountMenu() {
  const navigate = useNavigate()
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileService,
    staleTime: Infinity,
  })

  const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurantService,
    staleTime: Infinity,
  })

  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    mutationKey: ['sign-out'],
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  return (
    <Dialog>
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
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="h-4 w-4 mr-2" />
              <span>Perfil da Loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            disabled={isSigningOut}
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="w-full" onClick={() => signOutFn()}>
              <LogOut className="h-4 w-4 mr-2 text-rose-500 dark:text-rose-400" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
