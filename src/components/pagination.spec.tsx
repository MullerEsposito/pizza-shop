import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from '@testing-library/user-event'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should dipslay the right amount of pages and results', () => {
    const wrapper = render(<Pagination
      pageIndex={0}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const wrapper = render(<Pagination
      pageIndex={0}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima Página'
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const wrapper = render(<Pagination
      pageIndex={5}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página Anterior'
    })

    const user = userEvent.setup()

    await user.click(previousPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should be able to navigate to the first page', async () => {
    const wrapper = render(<Pagination
      pageIndex={5}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira Página'
    })

    const user = userEvent.setup()

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should be able to navigate to the last page', async () => {
    const wrapper = render(<Pagination
      pageIndex={5}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última Página'
    })

    const user = userEvent.setup()

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })

  it('should not be able to navigate to the next page if the current page is the last page', async () => {
    const wrapper = render(<Pagination
      pageIndex={19}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima Página'
    })
    
    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onPageChangeCallback).not.toHaveBeenCalled()
  })

  it('should not be able to navigate to the previous page if the current page is the first page', async () => {
    const wrapper = render(<Pagination
      pageIndex={0}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página Anterior'
    })
    
    const user = userEvent.setup()

    await user.click(previousPageButton)

    expect(onPageChangeCallback).not.toHaveBeenCalled()
  })

  it('should not be able to navigate to the first page if the current page is the second page', async () => {
    const wrapper = render(<Pagination
      pageIndex={1}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const firstPageButton = wrapper.getByRole('button', {
      name: 'Primeira Página'
    })

    const user = userEvent.setup()

    await user.click(firstPageButton)

    expect(onPageChangeCallback).not.toHaveBeenCalled()
  })

  it('should not be able to navigate to the last page if the current page is the penultimate page', async () => {
    const wrapper = render(<Pagination
      pageIndex={18}
      totalPages={200}
      perPage={10}
      onPageChange={onPageChangeCallback}
    />)

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última Página'
    })

    const user = userEvent.setup()

    await user.click(lastPageButton)

    expect(onPageChangeCallback).not.toHaveBeenCalled()
  })
})