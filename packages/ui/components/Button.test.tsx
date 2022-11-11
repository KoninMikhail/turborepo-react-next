import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

it("test button child", () => {
  render(<Button>Hello World!</Button>)

  expect(screen.getByRole("button")).toHaveTextContent("Hello World!")
})
