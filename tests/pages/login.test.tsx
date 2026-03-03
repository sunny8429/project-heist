import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import LoginPage from "@/app/(public)/login/page"

describe("LoginPage", () => {
  it("renders the page heading", () => {
    render(<LoginPage />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Log in to Your Account")
  })

  it("renders email and password inputs", () => {
    render(<LoginPage />)
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(document.querySelector("input[type='password']")).toBeInTheDocument()
  })

  it("renders the Log In submit button", () => {
    render(<LoginPage />)
    expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument()
  })

  it("renders a link to /signup", () => {
    render(<LoginPage />)
    const link = screen.getByRole("link", { name: /sign up/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/signup")
  })

  it("calls console.log with email and password on submit", async () => {
    const user = userEvent.setup()
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})
    render(<LoginPage />)

    await user.type(screen.getByLabelText(/email/i), "test@example.com")
    await user.type(document.querySelector("input[type='password']")!, "secret123")
    await user.click(screen.getByRole("button", { name: /log in/i }))

    expect(consoleSpy).toHaveBeenCalledWith({ email: "test@example.com", password: "secret123" })
    consoleSpy.mockRestore()
  })
})
