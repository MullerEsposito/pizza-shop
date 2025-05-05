import { render } from "@testing-library/react"
import { NavLink } from "./nav-link"
import { MemoryRouter } from "react-router-dom"

describe('NavLink', () => {
  it('should highlight the nav link when the respective page is active', () => {
    const wrapper = render(
      <>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>, 
      { wrapper: ({children}) => (
        <MemoryRouter initialEntries={['/about']}>
          {children}
        </MemoryRouter>
      )}
    )

    expect(wrapper.getByText('About').dataset.isactive).toEqual('true')
    expect(wrapper.getByText('Home').dataset.isactive).toEqual('false')
  })
})