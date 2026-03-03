import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"
import PasswordInput from "@/components/PasswordInput"

describe("PasswordInput", () => {
  it("renders a password input hidden by default", () => {
    render(<PasswordInput id="password" value="" onChange={() => {}} />)
    expect(document.querySelector("input")).toHaveAttribute("type", "password")
  })

  it("toggle button has aria-label 'Show password' initially", () => {
    render(<PasswordInput id="password" value="" onChange={() => {}} />)
    expect(screen.getByRole("button", { name: "Show password" })).toBeInTheDocument()
  })

  it("clicking toggle switches input to type='text' and updates aria-label", async () => {
    const user = userEvent.setup()
    render(<PasswordInput id="password" value="" onChange={() => {}} />)
    await user.click(screen.getByRole("button", { name: "Show password" }))
    expect(document.querySelector("input")).toHaveAttribute("type", "text")
    expect(screen.getByRole("button", { name: "Hide password" })).toBeInTheDocument()
  })

  it("clicking toggle again reverts input to type='password'", async () => {
    const user = userEvent.setup()
    render(<PasswordInput id="password" value="" onChange={() => {}} />)
    await user.click(screen.getByRole("button", { name: "Show password" }))
    await user.click(screen.getByRole("button", { name: "Hide password" }))
    expect(document.querySelector("input")).toHaveAttribute("type", "password")
  })
})
