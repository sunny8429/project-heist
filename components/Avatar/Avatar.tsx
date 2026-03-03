import styles from "./Avatar.module.css"

type AvatarProps = {
  name: string
}

function getInitials(name: string): string {
  const uppercaseLetters = name.match(/[A-Z]/g)
  if (uppercaseLetters && uppercaseLetters.length >= 2) {
    return uppercaseLetters.slice(0, 2).join("")
  }
  return name.charAt(0).toUpperCase()
}

export default function Avatar({ name }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <span>{getInitials(name)}</span>
    </div>
  )
}
