import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import Input from "@/components/Input"

describe("Input", () => {
  it("renders the label text", () => {
    render(<Input id="email" label="Email" type="email" value="" onChange={() => {}} />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it("renders with the correct type attribute", () => {
    render(<Input id="email" label="Email" type="email" value="" onChange={() => {}} />)
    expect(screen.getByLabelText(/email/i)).toHaveAttribute("type", "email")
  })

  it("calls onChange with the new value when typed into", async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Input id="name" label="Name" value="" onChange={handleChange} />)
    await user.type(screen.getByLabelText(/name/i), "hello")
    expect(handleChange).toHaveBeenCalled()
  })

  it("renders as required when required prop is passed", () => {
    render(<Input id="email" label="Email" type="email" value="" onChange={() => {}} required />)
    expect(screen.getByLabelText(/email/i)).toBeRequired()
  })
})
