# nada-ui-helpers

Lightweight JavaScript utility helpers for common UI tasks such as text formatting, input checks, and DOM class toggling.

## Installation

npm install nada-ui-helpers

## Usage

const {
  truncateText,
  capitalizeFirst,
  toggleClass,
  isNonEmptyString,
} = require("nada-ui-helpers");

const preview = truncateText("Responsive interface helper utilities for modern web apps.", 35);
const title = capitalizeFirst("user interface components");
const hasText = isNonEmptyString("  Hello UI  ");

const modal = document.querySelector("#modal");
toggleClass(modal, "is-open");

## API

- truncateText(text, maxLength = 80) — Shortens long strings cleanly with an ellipsis.
- capitalizeFirst(text) — Capitalizes the first character of a trimmed string.
- toggleClass(element, className) — Safely toggles a CSS class on a DOM element.
- isNonEmptyString(value) — Checks whether a value is a non-empty string after trimming.

## License

MIT
