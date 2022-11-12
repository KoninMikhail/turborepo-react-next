import { Button, Container } from '@packages/ui'
import { CounterState, InMemoryCounter } from './Counter'
import { useEffect, useState } from 'react'
import { createReactiveService } from './reactive'

const initialState: CounterState = { count: 0 }

export const CounterView = () => {
  const [_, setState] = useState<CounterState>(initialState)

  const counter = createReactiveService(
    new InMemoryCounter(initialState),
    (service) => setState(service.state)
  )

  useEffect(() => {
    console.log('CounterView rendered')
  })

  return (
    <Container>
      <b>Counter: {counter.state.count}</b>{' '}
      <Button onClick={() => counter.increment()}>Increment</Button>{' '}
      <Button onClick={() => counter.decrement()}>Decrement</Button>
    </Container>
  )
}
