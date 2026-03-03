# Plan: Authentication Forms

## Context
The login and signup pages are currently placeholder stubs (heading only). This plan implements functional auth forms on both pages as specified in `_specs/auth-forms.md`: email + password fields, show/hide password toggle, submit button, and a cross-link between the two pages. Forms log to console on submit (no API yet).

Three shared components are created for reuse across the app: `Input`, `Button`, and `PasswordInput`. The forms themselves remain separate per-page implementations.

---

## Files to Modify

| File | Action |
|---|---|
| `app/(public)/login/page.tsx` | Replace |
| `app/(public)/signup/page.tsx` | Replace |

## Files to Create

| File | Action |
|---|---|
| `components/Input/Input.tsx` | New component |
| `components/Input/Input.module.css` | New styles |
| `components/Input/index.ts` | New barrel export |
| `components/Button/Button.tsx` | New component |
| `components/Button/Button.module.css` | New styles |
| `components/Button/index.ts` | New barrel export |
| `components/PasswordInput/PasswordInput.tsx` | New component |
| `components/PasswordInput/PasswordInput.module.css` | New styles |
| `components/PasswordInput/index.ts` | New barrel export |
| `tests/components/Input.test.tsx` | New |
| `tests/components/Button.test.tsx` | New |
| `tests/components/PasswordInput.test.tsx` | New |
| `tests/pages/login.test.tsx` | New |
| `tests/pages/signup.test.tsx` | New |

No new packages needed. `lucide-react` and `@testing-library/user-event` are already installed.

---

## Step 1 — `components/Input`

Generic controlled text/email input for reuse across any form.

**Props:**
- `id: string`
- `type?: string` (defaults `"text"`)
- `value: string`
- `onChange: (value: string) => void`
- `required?: boolean`
- `placeholder?: string`
- `name?: string`

**CSS Module** (`.input`): `bg-lighter border border-light rounded-lg px-3 py-2 text-heading text-sm w-full focus:outline-none focus:border-primary`

**Barrel export:** `export { default } from "./Input"`

---

## Step 2 — `components/Button`

Generic button for reuse across any form or UI surface.

**Props:**
- `type?: "submit" | "button" | "reset"` (defaults `"button"`)
- `onClick?: () => void`
- `children: React.ReactNode`

**CSS Module** (`.button`): reuses the existing global `.btn` styles via `@apply` — `inline-block px-4 py-2 rounded-lg font-semibold text-sm text-heading bg-primary hover:bg-secondary transition-colors`

**Barrel export:** `export { default } from "./Button"`

---

## Step 3 — `components/PasswordInput`

Controlled password input with built-in show/hide toggle. Manages its own visibility state internally. Uses a plain `<input>` (not `Input` component) due to the specific `pr-10` padding needed to accommodate the toggle icon.

**Props:**
- `id: string`
- `value: string`
- `onChange: (value: string) => void`
- `required?: boolean`
- `name?: string`

**Internal state:** `showPassword: boolean` (defaults `false`)

**JSX:** wrapper `<div className={styles.wrapper}>` containing:
- `<input type={showPassword ? "text" : "password"} className={styles.input} ...>`
- `<button type="button" aria-label={showPassword ? "Hide password" : "Show password"} className={styles.toggle}>` with `<Eye size={16}>` / `<EyeOff size={16}>`

**CSS Module:**
- `.wrapper` — `relative`
- `.input` — same as `Input` component but with `pr-10`
- `.toggle` — `absolute inset-y-0 right-3 flex items-center text-body hover:text-heading`

**Barrel export:** `export { default } from "./PasswordInput"`

---

## Step 4 — `app/(public)/login/page.tsx`

Add `"use client"`. Imports: `useState`, `Link`, `Input`, `Button`, `PasswordInput`.

State: `email: string`, `password: string`

Handler: `handleSubmit` → `e.preventDefault()` + `console.log({ email, password })`

JSX:
- `.center-content` > `.page-content`
- `<h1 className="form-title">Log in to Your Account</h1>`
- `<form className="flex flex-col gap-4 mt-6 max-w-sm mx-auto">`
  - Email: `<label htmlFor="email">` + `<Input id="email" type="email" value={email} onChange={setEmail} required />`
  - Password: `<label htmlFor="password">` + `<PasswordInput id="password" value={password} onChange={setPassword} required />`
  - `<Button type="submit">Log In</Button>`
- Footer `<p>` → `<Link href="/signup">Sign up</Link>`

---

## Step 5 — `app/(public)/signup/page.tsx`

Identical structure to login. Differences only:
- Heading: `"Sign Up for an Account"`
- Button label: `"Sign Up"`
- Footer link: `href="/login"`, text `"Log in"`

---

## Step 6 — Tests

### `tests/components/Input.test.tsx` — 3 tests
1. Renders an input with the correct `type` attribute
2. Calls `onChange` with the new value when typed into
3. Renders as required when `required` prop is passed

### `tests/components/Button.test.tsx` — 3 tests
1. Renders children text
2. Defaults to `type="button"`
3. Calls `onClick` when clicked

### `tests/components/PasswordInput.test.tsx` — 4 tests
1. Renders a password input (`type="password"` by default)
2. Toggle button has `aria-label="Show password"` initially
3. Clicking toggle switches input to `type="text"` and aria-label to `"Hide password"`
4. Clicking toggle again reverts to `type="password"`

### `tests/pages/login.test.tsx` — 5 tests
1. Renders h1 with correct text
2. Renders email input and password input
3. Renders "Log In" submit button
4. Renders a link to `/signup`
5. Submit calls `console.log({ email, password })` with typed values

### `tests/pages/signup.test.tsx` — same 5 tests adapted for signup

**Key techniques:**
- `getByLabelText(/password/i)` works because `PasswordInput` receives `id` and the parent `<label htmlFor>` pairs with it
- `userEvent.setup()` — required for user-event v14
- `vi.spyOn(console, "log")` — `vi` must be explicitly imported from `"vitest"`

---

## Verification

1. Run `npm run dev` → visit `/login` and `/signup`: forms render, toggle works, console logs on submit, cross-links navigate correctly.
2. Run `npm test` → all existing + 20 new tests pass.
