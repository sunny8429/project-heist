import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import SignupPage from "@/app/(public)/signup/page"

describe("SignupPage", () => {
  it("renders the page heading", () => {
    render(<SignupPage />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Sign Up for an Account")
  })

  it("renders email and password inputs", () => {
    render(<SignupPage />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(document.querySelector("input[type='password']")).toBeInTheDocument()
  })

  it("renders the Sign Up submit button", () => {
    render(<SignupPage />)
    expect(screen.getByRole("button", { name: /sign up/i })).toBeInTheDocument()
  })

  it("renders a link to /login", () => {
    render(<SignupPage />)
    const link = screen.getByRole("link", { name: /log in/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/login")
  })

  it("calls console.log with email and password on submit", async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})
    render(<SignupPage />)

    await user.type(screen.getByLabelText(/email/i), "new@example.com")
    await user.type(document.querySelector("input[type='password']")!, "mypassword")
    await user.click(screen.getByRole("button", { name: /sign up/i }))

    expect(consoleSpy).toHaveBeenCalledWith({ email: "new@example.com", password: "mypassword" })
    consoleSpy.mockRestore()
  })
})
