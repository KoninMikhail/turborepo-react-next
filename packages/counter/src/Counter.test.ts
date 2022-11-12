import { InMemoryCounter } from './Counter'

it('test InMemoryCounter constructor', () => {
  const service = new InMemoryCounter({ count: 7 })

  expect(service.state.count).toEqual(7)
})
