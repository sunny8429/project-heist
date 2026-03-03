import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders successfully", () => {
    render(<Avatar name="Alice" />)
    expect(screen.getByText("A")).toBeInTheDocument()
  })

  it("displays first letter for a simple name", () => {
    render(<Avatar name="maninder" />)
    expect(screen.getByText("M")).toBeInTheDocument()
  })

  it("displays first 2 uppercase letters for PascalCase names", () => {
    render(<Avatar name="ManinderSingh" />)
    expect(screen.getByText("MS")).toBeInTheDocument()
  })
})
