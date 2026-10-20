# Scrimbafy.me — Scrimba Course Project

A frontend practice project built for a Scrimba course. The current page is a landing page for a fictional service that turns profile pictures into Scrimba-style avatars.

## What's implemented

- An introduction section and a profile-picture signup form.
- Required name, email, and image-upload fields with accessible labels and browser validation.
- CSS for a responsive layout: stacked sections on small screens and two columns from 576px.
- Custom typography, purple accents, and hover and focus states.

The project uses HTML and CSS, with Vite for local development and production builds. The form is a frontend demonstration; avatar generation and a submission backend are not implemented.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite.

```sh
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build
```

## Project files

- `index.html` — page content and form.
- `index.css` — responsive layout and styling.
- `index.js` — JavaScript entry file.
- `images/` — local image assets.
- `vite.config.js` — Vite configuration.

## Current setup notes

`index.html` currently links to `styles.css`, while the stylesheet in this repository is named `index.css`. It also references `images/avatar.png`, and the CSS references `images/intro-bg.png`; neither image is currently included. These paths need to be aligned with the available files for the intended design to display fully.
