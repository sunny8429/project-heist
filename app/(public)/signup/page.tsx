"use client"

import { useState } from "react"
import Link from "next/link"
import Input from "@/components/Input"
import Button from "@/components/Button"
import PasswordInput from "@/components/PasswordInput"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="center-content">
      <div className="page-content">
        <h1 className="form-title">Sign Up for an Account</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 max-w-sm mx-auto">
          <Input id="email" label="Email" type="email" value={email} onChange={setEmail} required />

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-sm font-medium text-body">Password</label>
            <PasswordInput id="password" value={password} onChange={setPassword} required />
          </div>

          <Button type="submit">Sign Up</Button>
        </form>

        <p className="text-center text-sm text-body mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:text-secondary">Log in</Link>
        </p>
      </div>
    </div>
  )
}
