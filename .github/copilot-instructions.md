# Copilot Instructions for Solar System Explorer (Planate)

## Project Overview
- This is a single-page, interactive, educational web app visualizing the solar system, built with vanilla HTML, CSS, and JavaScript (no frameworks).
- All planetary data, UI logic, and interactivity are handled in `index.html`, `style.css`, and `script.js`.
- The project is fully bilingual (Hindi/English) with a language switcher and all content available in both languages.

## Key Components
- `index.html`: Main structure, all UI elements, and containers for planets, info panel, controls, and legend.
- `style.css`: Handles all visual styles, animations (planet orbits, sun glow, etc.), and responsive/mobile design.
- `script.js`: Contains all logic for:
  - Animating orbits and planet rotations
  - Handling user interactions (hover, click, keyboard shortcuts)
  - Populating the info panel with planet data
  - Language switching and content translation
  - Quiz, 3D view, timeline, and sound controls

## Developer Workflows
- **No build step**: Open `index.html` directly in a browser or use Live Server for local development.
- **No external dependencies** except Font Awesome (CDN) for icons.
- **Testing**: Manual, via browser interaction. No automated test suite.
- **Debugging**: Use browser dev tools (console, inspector) for JS and CSS debugging.

## Project-Specific Conventions
- All planet and feature data is hardcoded in `script.js` as objects/arrays, with both Hindi and English fields.
- UI controls (buttons, keyboard shortcuts) are mapped in `script.js` and documented in the README.
- All animations and effects are CSS-based, with class names matching planet/feature names.
- Language switching updates all visible content and persists preference (likely via localStorage).
- No routing or page reloads; all navigation is in-page.

## Integration Points
- Font Awesome is loaded via CDN in `index.html`.
- No backend, API, or server-side code.
- No third-party analytics or tracking.

## Examples
- To add a new planet or feature, update both the HTML structure and the corresponding data/logic in `script.js` and styles in `style.css`.
- To add a new language, extend the translation objects in `script.js` and update the language switcher logic.

## References
- See `README.md` for feature list, keyboard shortcuts, and usage instructions.
- All code is in the project root: `index.html`, `style.css`, `script.js`.

---

If you add new features, follow the existing patterns for data structure, UI updates, and bilingual support. Keep the UI responsive and accessible.
