import { Button } from '@packages/ui'
import { CounterView } from '@packages/counter'

export default function Web() {
  return (
    <div>
      <h1>Web App</h1>
      <Button>Boop!</Button>
      <hr />
      <h2>Reactive Counter Component</h2>
      <CounterView />
    </div>
  )
}
