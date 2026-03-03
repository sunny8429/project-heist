import styles from "./Input.module.css"

type InputProps = {
  id: string
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  name?: string
}

export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  name,
}: InputProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        name={name}
        className={styles.input}
      />
    </div>
  )
}
