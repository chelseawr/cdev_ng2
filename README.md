# chelsea.dev – Angular 18 Portfolio Site

Personal portfolio for software engineer Chelsea May, built with Angular 18 and deployed via AWS Amplify.  
This project demonstrates modern Angular architecture, responsive layout design, accessible UI practices, and a clean single-page “slide” experience optimized for mobile and desktop.

**Live site:** https://www.chelsea.dev  
**Source repo:** https://github.com/chelseawr/cdev_ng2

---

## Overview

This site began from the official AWS Amplify Angular template and was refactored into a fully custom layout.  
The project showcases:

- Modern Angular (v18+) with standalone components
- Responsive and mobile-first UI
- Slide-based section navigation
- Keyboard-accessible navigation and improved semantic structure
- Clean, static deployment via AWS Amplify using a minimal `amplify.yml`

---

## Features

### Slide-Based Navigation

- Each major section is its own Angular component.
- Navigation works via scroll, keyboard, and mobile “dot” selectors.
- Section state is tracked to update active indicators.

### Responsive Layout

- Device detection + responsive behavior handled through a lightweight service.
- Separate layouts for mobile vs desktop without duplicating markup.

### Accessibility

Intentional a11y improvements include:

- Semantic headings and landmarks
- Visible keyboard focus states
- ARIA labels for slide selectors and icon-only buttons
- Reduced-motion fallbacks for key transitions

---

## Tech Stack

**Frontend**

- Angular 18 (standalone components, modern APIs)
- TypeScript
- SCSS
- Font Awesome Icons

**Tooling**

- Angular CLI
- ESLint + Prettier
- Node 20.x

**Deployment**

- AWS Amplify with a simple Node/Angular build pipeline
- GitHub for source control

---

## Development

### Install

```bash
npm install
```

### Run Locally

```bash
ng serve
```
