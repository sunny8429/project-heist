// preview page for newly created UI components
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>

      <section>
        <h3>Avatar</h3>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Avatar name="Alice" />
          <Avatar name="maninder" />
          <Avatar name="ManinderSingh" />
          <Avatar name="ProjectHeist" />
        </div>
      </section>
    </div>
  )
}
