"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import styles from "./PasswordInput.module.css"

type PasswordInputProps = {
  id: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  name?: string
}

export default function PasswordInput({ id, value, onChange, required, name }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        name={name}
        className={styles.input}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
        className={styles.toggle}
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
    </div>
  )
}
