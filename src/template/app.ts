// HTML Template
export function htmlPage(): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Plant Monitor System</title>
        <style>
          /*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
          @layer properties;
          @layer theme, base, components, utilities;
          @layer theme {
            :root,
            :host {
              --font-sans: ui-sans-serif, system-ui, sans-serif,
                "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
                "Noto Color Emoji";
              --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
              --color-red-600: oklch(57.7% 0.245 27.325);
              --color-red-700: oklch(50.5% 0.213 27.518);
              --color-yellow-100: oklch(97.3% 0.071 103.193);
              --color-green-100: oklch(96.2% 0.044 156.743);
              --color-green-200: oklch(92.5% 0.084 155.995);
              --color-green-300: oklch(87.1% 0.15 154.449);
              --color-green-500: oklch(72.3% 0.219 149.579);
              --color-green-600: oklch(62.7% 0.194 149.214);
              --color-green-700: oklch(52.7% 0.154 150.069);
              --color-green-800: oklch(44.8% 0.119 151.328);
              --color-gray-200: oklch(92.8% 0.006 264.531);
              --color-gray-300: oklch(87.2% 0.01 258.338);
              --color-gray-500: oklch(55.1% 0.027 264.364);
              --color-gray-700: oklch(37.3% 0.034 259.733);
              --color-white: #fff;
              --spacing: 0.25rem;
              --container-2xl: 42rem;
              --text-xs: 0.75rem;
              --text-xs--line-height: calc(1 / 0.75);
              --text-lg: 1.125rem;
              --text-lg--line-height: calc(1.75 / 1.125);
              --text-xl: 1.25rem;
              --text-xl--line-height: calc(1.75 / 1.25);
              --text-2xl: 1.5rem;
              --text-2xl--line-height: calc(2 / 1.5);
              --text-4xl: 2.25rem;
              --text-4xl--line-height: calc(2.5 / 2.25);
              --font-weight-semibold: 600;
              --font-weight-bold: 700;
              --font-weight-extrabold: 800;
              --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
              --default-transition-duration: 150ms;
              --default-transition-timing-function: cubic-bezier(
                0.4,
                0,
                0.2,
                1
              );
              --default-font-family: var(--font-sans);
              --default-mono-font-family: var(--font-mono);
            }
          }
          @layer base {
            *,
            ::after,
            ::before,
            ::backdrop,
            ::file-selector-button {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
              border: 0 solid;
            }
            html,
            :host {
              line-height: 1.5;
              -webkit-text-size-adjust: 100%;
              tab-size: 4;
              font-family: var(
                --default-font-family,
                ui-sans-serif,
                system-ui,
                sans-serif,
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji"
              );
              font-feature-settings: var(
                --default-font-feature-settings,
                normal
              );
              font-variation-settings: var(
                --default-font-variation-settings,
                normal
              );
              -webkit-tap-highlight-color: transparent;
            }
            hr {
              height: 0;
              color: inherit;
              border-top-width: 1px;
            }
            abbr:where([title]) {
              -webkit-text-decoration: underline dotted;
              text-decoration: underline dotted;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-size: inherit;
              font-weight: inherit;
            }
            a {
              color: inherit;
              -webkit-text-decoration: inherit;
              text-decoration: inherit;
            }
            b,
            strong {
              font-weight: bolder;
            }
            code,
            kbd,
            samp,
            pre {
              font-family: var(
                --default-mono-font-family,
                ui-monospace,
                SFMono-Regular,
                Menlo,
                Monaco,
                Consolas,
                "Liberation Mono",
                "Courier New",
                monospace
              );
              font-feature-settings: var(
                --default-mono-font-feature-settings,
                normal
              );
              font-variation-settings: var(
                --default-mono-font-variation-settings,
                normal
              );
              font-size: 1em;
            }
            small {
              font-size: 80%;
            }
            sub,
            sup {
              font-size: 75%;
              line-height: 0;
              position: relative;
              vertical-align: baseline;
            }
            sub {
              bottom: -0.25em;
            }
            sup {
              top: -0.5em;
            }
            table {
              text-indent: 0;
              border-color: inherit;
              border-collapse: collapse;
            }
            :-moz-focusring {
              outline: auto;
            }
            progress {
              vertical-align: baseline;
            }
            summary {
              display: list-item;
            }
            ol,
            ul,
            menu {
              list-style: none;
            }
            img,
            svg,
            video,
            canvas,
            audio,
            iframe,
            embed,
            object {
              display: block;
              vertical-align: middle;
            }
            img,
            video {
              max-width: 100%;
              height: auto;
            }
            button,
            input,
            select,
            optgroup,
            textarea,
            ::file-selector-button {
              font: inherit;
              font-feature-settings: inherit;
              font-variation-settings: inherit;
              letter-spacing: inherit;
              color: inherit;
              border-radius: 0;
              background-color: transparent;
              opacity: 1;
            }
            :where(select:is([multiple], [size])) optgroup {
              font-weight: bolder;
            }
            :where(select:is([multiple], [size])) optgroup option {
              padding-inline-start: 20px;
            }
            ::file-selector-button {
              margin-inline-end: 4px;
            }
            ::placeholder {
              opacity: 1;
            }
            @supports (not (-webkit-appearance: -apple-pay-button)) or
              (contain-intrinsic-size: 1px) {
              ::placeholder {
                color: currentcolor;
                @supports (color: color-mix(in lab, red, red)) {
                  color: color-mix(in oklab, currentcolor 50%, transparent);
                }
              }
            }
            textarea {
              resize: vertical;
            }
            ::-webkit-search-decoration {
              -webkit-appearance: none;
            }
            ::-webkit-date-and-time-value {
              min-height: 1lh;
              text-align: inherit;
            }
            ::-webkit-datetime-edit {
              display: inline-flex;
            }
            ::-webkit-datetime-edit-fields-wrapper {
              padding: 0;
            }
            ::-webkit-datetime-edit,
            ::-webkit-datetime-edit-year-field,
            ::-webkit-datetime-edit-month-field,
            ::-webkit-datetime-edit-day-field,
            ::-webkit-datetime-edit-hour-field,
            ::-webkit-datetime-edit-minute-field,
            ::-webkit-datetime-edit-second-field,
            ::-webkit-datetime-edit-millisecond-field,
            ::-webkit-datetime-edit-meridiem-field {
              padding-block: 0;
            }
            :-moz-ui-invalid {
              box-shadow: none;
            }
            button,
            input:where([type="button"], [type="reset"], [type="submit"]),
            ::file-selector-button {
              appearance: button;
            }
            ::-webkit-inner-spin-button,
            ::-webkit-outer-spin-button {
              height: auto;
            }
            [hidden]:where(:not([hidden="until-found"])) {
              display: none !important;
            }
          }
          @layer utilities {
            .static {
              position: static;
            }
            .mx-auto {
              margin-inline: auto;
            }
            .mt-6 {
              margin-top: calc(var(--spacing) * 6);
            }
            .mt-10 {
              margin-top: calc(var(--spacing) * 10);
            }
            .mb-1 {
              margin-bottom: calc(var(--spacing) * 1);
            }
            .mb-2 {
              margin-bottom: calc(var(--spacing) * 2);
            }
            .mb-4 {
              margin-bottom: calc(var(--spacing) * 4);
            }
            .ml-3 {
              margin-left: calc(var(--spacing) * 3);
            }
            .flex {
              display: flex;
            }
            .grid {
              display: grid;
            }
            .inline-block {
              display: inline-block;
            }
            .table {
              display: table;
            }
            .min-h-screen {
              min-height: 100vh;
            }
            .w-full {
              width: 100%;
            }
            .max-w-2xl {
              max-width: var(--container-2xl);
            }
            .border-collapse {
              border-collapse: collapse;
            }
            .resize {
              resize: both;
            }
            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .flex-col {
              flex-direction: column;
            }
            .items-center {
              align-items: center;
            }
            .justify-center {
              justify-content: center;
            }
            .gap-6 {
              gap: calc(var(--spacing) * 6);
            }
            .space-y-8 {
              :where(& > :not(:last-child)) {
                --tw-space-y-reverse: 0;
                margin-block-start: calc(
                  calc(var(--spacing) * 8) * var(--tw-space-y-reverse)
                );
                margin-block-end: calc(
                  calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse))
                );
              }
            }
            .rounded-full {
              border-radius: calc(infinity * 1px);
            }
            .border {
              border-style: var(--tw-border-style);
              border-width: 1px;
            }
            .bg-gray-200 {
              background-color: var(--color-gray-200);
            }
            .bg-gray-300 {
              background-color: var(--color-gray-300);
            }
            .bg-green-500 {
              background-color: var(--color-green-500);
            }
            .bg-green-600 {
              background-color: var(--color-green-600);
            }
            .bg-red-600 {
              background-color: var(--color-red-600);
            }
            .bg-yellow-100 {
              background-color: var(--color-yellow-100);
            }
            .bg-gradient-to-br {
              --tw-gradient-position: to bottom right in oklab;
              background-image: linear-gradient(var(--tw-gradient-stops));
            }
            .from-green-100 {
              --tw-gradient-from: var(--color-green-100);
              --tw-gradient-stops: var(
                --tw-gradient-via-stops,
                var(--tw-gradient-position),
                var(--tw-gradient-from) var(--tw-gradient-from-position),
                var(--tw-gradient-to) var(--tw-gradient-to-position)
              );
            }
            .via-green-200 {
              --tw-gradient-via: var(--color-green-200);
              --tw-gradient-via-stops: var(--tw-gradient-position),
                var(--tw-gradient-from) var(--tw-gradient-from-position),
                var(--tw-gradient-via) var(--tw-gradient-via-position),
                var(--tw-gradient-to) var(--tw-gradient-to-position);
              --tw-gradient-stops: var(--tw-gradient-via-stops);
            }
            .to-green-300 {
              --tw-gradient-to: var(--color-green-300);
              --tw-gradient-stops: var(
                --tw-gradient-via-stops,
                var(--tw-gradient-position),
                var(--tw-gradient-from) var(--tw-gradient-from-position),
                var(--tw-gradient-to) var(--tw-gradient-to-position)
              );
            }
            .p-6 {
              padding: calc(var(--spacing) * 6);
            }
            .p-8 {
              padding: calc(var(--spacing) * 8);
            }
            .px-3 {
              padding-inline: calc(var(--spacing) * 3);
            }
            .px-5 {
              padding-inline: calc(var(--spacing) * 5);
            }
            .py-1 {
              padding-block: calc(var(--spacing) * 1);
            }
            .py-2 {
              padding-block: calc(var(--spacing) * 2);
            }
            .text-center {
              text-align: center;
            }
            .text-2xl {
              font-size: var(--text-2xl);
              line-height: var(--tw-leading, var(--text-2xl--line-height));
            }
            .text-4xl {
              font-size: var(--text-4xl);
              line-height: var(--tw-leading, var(--text-4xl--line-height));
            }
            .text-lg {
              font-size: var(--text-lg);
              line-height: var(--tw-leading, var(--text-lg--line-height));
            }
            .text-xl {
              font-size: var(--text-xl);
              line-height: var(--tw-leading, var(--text-xl--line-height));
            }
            .text-xs {
              font-size: var(--text-xs);
              line-height: var(--tw-leading, var(--text-xs--line-height));
            }
            .font-bold {
              --tw-font-weight: var(--font-weight-bold);
              font-weight: var(--font-weight-bold);
            }
            .font-extrabold {
              --tw-font-weight: var(--font-weight-extrabold);
              font-weight: var(--font-weight-extrabold);
            }
            .font-semibold {
              --tw-font-weight: var(--font-weight-semibold);
              font-weight: var(--font-weight-semibold);
            }
            .text-gray-500 {
              color: var(--color-gray-500);
            }
            .text-gray-700 {
              color: var(--color-gray-700);
            }
            .text-green-700 {
              color: var(--color-green-700);
            }
            .text-green-800 {
              color: var(--color-green-800);
            }
            .text-white {
              color: var(--color-white);
            }
            .underline {
              text-decoration-line: underline;
            }
            .shadow-lg {
              --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 /
                        0.1)),
                0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
              box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow),
                var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
                var(--tw-shadow);
            }
            .outline {
              outline-style: var(--tw-outline-style);
              outline-width: 1px;
            }
            .drop-shadow-lg {
              --tw-drop-shadow-size: drop-shadow(
                0 4px 4px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.15))
              );
              --tw-drop-shadow: drop-shadow(var(--drop-shadow-lg));
              filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
                var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
                var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            }
            .filter {
              filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
                var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
                var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
            }
            .backdrop-filter {
              -webkit-backdrop-filter: var(--tw-backdrop-blur)
                var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
                var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
                var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
              backdrop-filter: var(--tw-backdrop-blur)
                var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
                var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
                var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
                var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            }
            .transition {
              transition-property: color, background-color, border-color,
                outline-color, text-decoration-color, fill, stroke,
                --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity,
                box-shadow, transform, translate, scale, rotate, filter,
                -webkit-backdrop-filter, backdrop-filter, display, visibility,
                content-visibility, overlay, pointer-events;
              transition-timing-function: var(
                --tw-ease,
                var(--default-transition-timing-function)
              );
              transition-duration: var(
                --tw-duration,
                var(--default-transition-duration)
              );
            }
            .hover:bg-green-700 {
              &:hover {
                @media (hover: hover) {
                  background-color: var(--color-green-700);
                }
              }
            }
            .hover:bg-red-700 {
              &:hover {
                @media (hover: hover) {
                  background-color: var(--color-red-700);
                }
              }
            }
          }
          @property --tw-space-y-reverse {
            syntax: "*";
            inherits: false;
            initial-value: 0;
          }
          @property --tw-border-style {
            syntax: "*";
            inherits: false;
            initial-value: solid;
          }
          @property --tw-gradient-position {
            syntax: "*";
            inherits: false;
          }
          @property --tw-gradient-from {
            syntax: "<color>";
            inherits: false;
            initial-value: #0000;
          }
          @property --tw-gradient-via {
            syntax: "<color>";
            inherits: false;
            initial-value: #0000;
          }
          @property --tw-gradient-to {
            syntax: "<color>";
            inherits: false;
            initial-value: #0000;
          }
          @property --tw-gradient-stops {
            syntax: "*";
            inherits: false;
          }
          @property --tw-gradient-via-stops {
            syntax: "*";
            inherits: false;
          }
          @property --tw-gradient-from-position {
            syntax: "<length-percentage>";
            inherits: false;
            initial-value: 0%;
          }
          @property --tw-gradient-via-position {
            syntax: "<length-percentage>";
            inherits: false;
            initial-value: 50%;
          }
          @property --tw-gradient-to-position {
            syntax: "<length-percentage>";
            inherits: false;
            initial-value: 100%;
          }
          @property --tw-font-weight {
            syntax: "*";
            inherits: false;
          }
          @property --tw-shadow {
            syntax: "*";
            inherits: false;
            initial-value: 0 0 #0000;
          }
          @property --tw-shadow-color {
            syntax: "*";
            inherits: false;
          }
          @property --tw-shadow-alpha {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 100%;
          }
          @property --tw-inset-shadow {
            syntax: "*";
            inherits: false;
            initial-value: 0 0 #0000;
          }
          @property --tw-inset-shadow-color {
            syntax: "*";
            inherits: false;
          }
          @property --tw-inset-shadow-alpha {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 100%;
          }
          @property --tw-ring-color {
            syntax: "*";
            inherits: false;
          }
          @property --tw-ring-shadow {
            syntax: "*";
            inherits: false;
            initial-value: 0 0 #0000;
          }
          @property --tw-inset-ring-color {
            syntax: "*";
            inherits: false;
          }
          @property --tw-inset-ring-shadow {
            syntax: "*";
            inherits: false;
            initial-value: 0 0 #0000;
          }
          @property --tw-ring-inset {
            syntax: "*";
            inherits: false;
          }
          @property --tw-ring-offset-width {
            syntax: "<length>";
            inherits: false;
            initial-value: 0px;
          }
          @property --tw-ring-offset-color {
            syntax: "*";
            inherits: false;
            initial-value: #fff;
          }
          @property --tw-ring-offset-shadow {
            syntax: "*";
            inherits: false;
            initial-value: 0 0 #0000;
          }
          @property --tw-outline-style {
            syntax: "*";
            inherits: false;
            initial-value: solid;
          }
          @property --tw-blur {
            syntax: "*";
            inherits: false;
          }
          @property --tw-brightness {
            syntax: "*";
            inherits: false;
          }
          @property --tw-contrast {
            syntax: "*";
            inherits: false;
          }
          @property --tw-grayscale {
            syntax: "*";
            inherits: false;
          }
          @property --tw-hue-rotate {
            syntax: "*";
            inherits: false;
          }
          @property --tw-invert {
            syntax: "*";
            inherits: false;
          }
          @property --tw-opacity {
            syntax: "*";
            inherits: false;
          }
          @property --tw-saturate {
            syntax: "*";
            inherits: false;
          }
          @property --tw-sepia {
            syntax: "*";
            inherits: false;
          }
          @property --tw-drop-shadow {
            syntax: "*";
            inherits: false;
          }
          @property --tw-drop-shadow-color {
            syntax: "*";
            inherits: false;
          }
          @property --tw-drop-shadow-alpha {
            syntax: "<percentage>";
            inherits: false;
            initial-value: 100%;
          }
          @property --tw-drop-shadow-size {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-blur {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-brightness {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-contrast {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-grayscale {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-hue-rotate {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-invert {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-opacity {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-saturate {
            syntax: "*";
            inherits: false;
          }
          @property --tw-backdrop-sepia {
            syntax: "*";
            inherits: false;
          }
          @layer properties {
            @supports ((-webkit-hyphens: none) and (not (margin-trim: inline)))
              or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
              *,
              ::before,
              ::after,
              ::backdrop {
                --tw-space-y-reverse: 0;
                --tw-border-style: solid;
                --tw-gradient-position: initial;
                --tw-gradient-from: #0000;
                --tw-gradient-via: #0000;
                --tw-gradient-to: #0000;
                --tw-gradient-stops: initial;
                --tw-gradient-via-stops: initial;
                --tw-gradient-from-position: 0%;
                --tw-gradient-via-position: 50%;
                --tw-gradient-to-position: 100%;
                --tw-font-weight: initial;
                --tw-shadow: 0 0 #0000;
                --tw-shadow-color: initial;
                --tw-shadow-alpha: 100%;
                --tw-inset-shadow: 0 0 #0000;
                --tw-inset-shadow-color: initial;
                --tw-inset-shadow-alpha: 100%;
                --tw-ring-color: initial;
                --tw-ring-shadow: 0 0 #0000;
                --tw-inset-ring-color: initial;
                --tw-inset-ring-shadow: 0 0 #0000;
                --tw-ring-inset: initial;
                --tw-ring-offset-width: 0px;
                --tw-ring-offset-color: #fff;
                --tw-ring-offset-shadow: 0 0 #0000;
                --tw-outline-style: solid;
                --tw-blur: initial;
                --tw-brightness: initial;
                --tw-contrast: initial;
                --tw-grayscale: initial;
                --tw-hue-rotate: initial;
                --tw-invert: initial;
                --tw-opacity: initial;
                --tw-saturate: initial;
                --tw-sepia: initial;
                --tw-drop-shadow: initial;
                --tw-drop-shadow-color: initial;
                --tw-drop-shadow-alpha: 100%;
                --tw-drop-shadow-size: initial;
                --tw-backdrop-blur: initial;
                --tw-backdrop-brightness: initial;
                --tw-backdrop-contrast: initial;
                --tw-backdrop-grayscale: initial;
                --tw-backdrop-hue-rotate: initial;
                --tw-backdrop-invert: initial;
                --tw-backdrop-opacity: initial;
                --tw-backdrop-saturate: initial;
                --tw-backdrop-sepia: initial;
              }
            }
          }
        </style>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
          .glass {
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
            backdrop-filter: blur(8px);
            border-radius: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.18);
          }
          .value-animate {
            transition: color 0.3s, background 0.3s;
          }
        </style>
      </head>
      <body
        class="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center"
      >
        <div class="glass max-w-2xl w-full mx-auto p-8 space-y-8">
          <h1
            class="text-4xl font-extrabold text-center text-green-800 drop-shadow-lg"
          >
            🌱 Plant Monitor System
          </h1>
          <div class="grid grid-cols-2 gap-6 text-center">
            <div class="glass p-6 flex flex-col items-center">
              <p class="text-xs text-gray-500 mb-1">🌡 Temperature</p>
              <p id="temp" class="text-2xl font-bold value-animate">-- °C</p>
            </div>
            <div class="glass p-6 flex flex-col items-center">
              <p class="text-xs text-gray-500 mb-1">💧 Humidity</p>
              <p id="hum" class="text-2xl font-bold value-animate">-- %</p>
            </div>
            <div class="glass p-6 flex flex-col items-center">
              <p class="text-xs text-gray-500 mb-1">🌿 Soil Moisture</p>
              <p id="soil" class="text-2xl font-bold value-animate">-- %</p>
            </div>
            <div class="glass p-6 flex flex-col items-center">
              <p class="text-xs text-gray-500 mb-1">🔆 Light</p>
              <p id="light" class="text-2xl font-bold value-animate">--</p>
            </div>
          </div>
          <div class="text-center mt-6">
            <p class="text-lg font-semibold mb-2">
              Pump Status:
              <span
                id="pump"
                class="inline-block px-3 py-1 rounded-full font-bold bg-gray-200 text-gray-700 value-animate"
                >--</span
              >
            </p>
            <button
              onclick="sendCommand('pump_on')"
              class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full shadow-lg font-semibold transition"
            >
              Turn Pump ON
            </button>
            <button
              onclick="sendCommand('pump_off')"
              class="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-lg font-semibold ml-3 transition"
            >
              Turn Pump OFF
            </button>
          </div>
          <div class="mt-10">
            <h2 class="text-xl font-bold text-green-800 mb-4">
              Live Data History
            </h2>
            <canvas id="historyChart" height="200"></canvas>
          </div>
        </div>
        <script>
          const ws = new WebSocket(
            "wss://esp-report.onrender.com/ws/dashboard"
          );
          function animateValue(id, value, suffix = "") {
            const el = document.getElementById(id);
            if (el.innerText !== value + suffix) {
              el.classList.add("bg-yellow-100", "text-green-700");
              setTimeout(
                () => el.classList.remove("bg-yellow-100", "text-green-700"),
                400
              );
            }
            el.innerText = value + suffix;
          }
          // Chart.js setup
          let chart;
          let chartData = {
            labels: [],
            datasets: [
              {
                label: "Temp (°C)",
                data: [],
                borderColor: "#16a34a",
                backgroundColor: "rgba(22,163,74,0.1)",
                yAxisID: "y",
              },
              {
                label: "Humidity (%)",
                data: [],
                borderColor: "#2563eb",
                backgroundColor: "rgba(37,99,235,0.1)",
                yAxisID: "y1",
              },
              {
                label: "Soil (%)",
                data: [],
                borderColor: "#a21caf",
                backgroundColor: "rgba(162,28,175,0.1)",
                yAxisID: "y2",
              },
              {
                label: "Light",
                data: [],
                borderColor: "#f59e42",
                backgroundColor: "rgba(245,158,66,0.1)",
                yAxisID: "y3",
              },
            ],
          };
          function addDataToChart(entry) {
            const ts = new Date(entry.timestamp || Date.now());
            const label = ts.toLocaleTimeString();
            chartData.labels.push(label);
            chartData.datasets[0].data.push(entry.temp);
            chartData.datasets[1].data.push(entry.hum);
            chartData.datasets[2].data.push(entry.soil);
            chartData.datasets[3].data.push(entry.light);
            // Keep only last 20
            if (chartData.labels.length > 20) {
              chartData.labels.shift();
              chartData.datasets.forEach((ds) => ds.data.shift());
            }
            chart.update("none");
          }
          async function fetchHistory() {
            const res = await fetch("/api/history");
            const history = await res.json();
            history.forEach(addDataToChart);
            chart.update();
          }
          window.onload = () => {
            const ctx = document
              .getElementById("historyChart")
              .getContext("2d");
            chart = new Chart(ctx, {
              type: "line",
              data: chartData,
              options: {
                responsive: true,
                interaction: { mode: "index", intersect: false },
                stacked: false,
                plugins: {
                  legend: { position: "top" },
                  title: { display: false },
                },
                scales: {
                  y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    title: { display: true, text: "Temp (°C)" },
                    grid: { color: "#d1fae5" },
                  },
                  y1: {
                    type: "linear",
                    display: true,
                    position: "right",
                    title: { display: true, text: "Humidity (%)" },
                    grid: { drawOnChartArea: false },
                    min: 0,
                    max: 100,
                  },
                  y2: {
                    type: "linear",
                    display: false,
                    position: "right",
                    min: 0,
                    max: 100,
                  },
                  y3: { type: "linear", display: false, position: "right" },
                },
              },
            });
            fetchHistory();
          };
          ws.onmessage = (event) => {
            let data;
            try {
              data = JSON.parse(event.data);
            } catch (e) {
              return;
            }
            if (
              data.type === "data" ||
              (typeof data.temp !== "undefined" &&
                typeof data.hum !== "undefined" &&
                typeof data.soil !== "undefined" &&
                typeof data.light !== "undefined" &&
                typeof data.pump !== "undefined")
            ) {
              animateValue("temp", data.temp, " °C");
              animateValue("hum", data.hum, " %");
              animateValue("soil", data.soil, " %");
              animateValue("light", data.light, "");
              const pumpEl = document.getElementById("pump");
              pumpEl.innerText = data.pump ? "ON" : "OFF";
              pumpEl.className = data.pump
                ? "inline-block px-3 py-1 rounded-full font-bold bg-green-500 text-white value-animate"
                : "inline-block px-3 py-1 rounded-full font-bold bg-gray-300 text-gray-700 value-animate";
              // Add to chart
              addDataToChart({ ...data, timestamp: Date.now() });
            }
          };
          function sendCommand(cmd) {
            ws.send(JSON.stringify({ action: cmd }));
          }
        </script>
      </body>
    </html>
  `;
}
