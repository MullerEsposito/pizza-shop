import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { SuperSEO } from 'react-super-seo'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  const handleSignInForm = async (data: SignInForm) => {
    console.log(data)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('Enviaremos um link de autenticação para o seu e-mail!', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignInForm(data),
        },
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }
  return (
    <>
      <SuperSEO title="Auth | pizza.shop" />
      <div className="p-8">
        <Button asChild variant="ghost" className="absolute top-8 right-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex flex-col w-[350px] justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignInForm)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
