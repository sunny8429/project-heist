import styles from "./Button.module.css"

type ButtonProps = {
  type?: "submit" | "button" | "reset"
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ type = "button", onClick, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
