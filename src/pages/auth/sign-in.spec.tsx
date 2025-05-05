import { render } from "@testing-library/react"
import { SignIn } from "./sign-in"
import { MemoryRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"

describe('SignIn', () => {
  it('should set default email input value if email is present on search params', () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/sign-in?email=jhondoe@test.com']}>
          <SignIn />
        </MemoryRouter>
      </QueryClientProvider>
    )
    
    const emailInput = wrapper.getByLabelText('Seu e-mail') as HTMLInputElement
    expect(emailInput.value).toEqual('jhondoe@test.com')
  })
})