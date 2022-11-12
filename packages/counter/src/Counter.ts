export interface CounterState {
  count: number
}

export interface Counter {
  state: CounterState
  increment(): void
  decrement(): void
}

// TODO: add tests
export class InMemoryCounter implements Counter {
  state: CounterState

  constructor(state: CounterState) {
    this.state = state
  }

  increment(): void {
    this.state = {
      count: this.state.count++,
    }
  }

  decrement(): void {
    this.state = {
      count: this.state.count--,
    }
  }
}
