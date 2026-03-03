# Spec for auth-forms

branch: claude/feature/auth-forms-01
figma_component (if used): N/A

## Summary

Add functional authentication forms to the login and signup pages. Each page displays a form with email and password fields, a toggle to show/hide the password, and a submit button. On submission the form logs the field values to the console. Users can navigate easily between the login and signup forms via a link.

## Functional Requirements

- The login page (`/login`) displays a form with:
  - An email input field
  - A password input field with a show/hide toggle icon (using `lucide-react`)
  - A "Log In" submit button
  - A link to navigate to the signup page (`/signup`)
- The signup page (`/signup`) displays a form with:
  - An email input field
  - A password input field with a show/hide toggle icon (using `lucide-react`)
  - A "Sign Up" submit button
  - A link to navigate to the login page (`/login`)
- The show/hide password toggle switches the input type between `password` and `text`
- On form submission, the email and password values are logged to the browser console (no API call required at this stage)
- Form submission does not navigate away from the page

## Figma Design Reference (only if referenced)

- File: N/A
- Component name: N/A
- Key visual constraints: N/A

## Possible Edge Cases

- User submits with empty fields — rely on native browser `required` validation to block submission
- User toggles password visibility multiple times — state must stay in sync correctly
- Password field defaults to hidden (`type="password"`) on page load and on route change

## Acceptance Criteria

- [ ] Login page renders an email field, a password field, a show/hide toggle, and a "Log In" submit button
- [ ] Signup page renders an email field, a password field, a show/hide toggle, and a "Sign Up" submit button
- [ ] Clicking the toggle icon switches the password field between visible and hidden text
- [ ] Submitting the login form logs `{ email, password }` to the console
- [ ] Submitting the signup form logs `{ email, password }` to the console
- [ ] Login page includes a link to `/signup`
- [ ] Signup page includes a link to `/login`
- [ ] Both email and password fields are marked as required

## Open Questions

- Should the two forms share a single reusable `AuthForm` component, or stay as separate per-page implementations? make seperate
- Will a "confirm password" field be required on the signup form in a future iteration? No

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Renders email field, password field, and submit button on each page
- Password field defaults to `type="password"` on load
- Clicking the show/hide toggle changes the password input type to `text`, and back again
- Submitting the form calls `console.log` with the entered email and password values
- A navigation link to the opposite auth page is present and points to the correct route
