import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import Button from "@/components/Button"

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("defaults to type='button'", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button")).toHaveAttribute("type", "button")
  })

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    await user.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
