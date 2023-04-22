import { Component } from '@angular/core';

@Component({
  selector: 'app-media-queries',
  templateUrl: './media-queries.component.html',
})
export class MediaQueriesComponent {
  syntax = `
@media media type and (condition: breakpoint) {
  /* style */
}
  `;
  screen_width = `
@media (width: 480px) {
  /* style */
}

@media (min-width: 480px) {
  /* style */
}

@media (max-width: 1024px) {
  /* style */
}

@media (min-width: 480px) and (max-width:1024px) {
  /* style */
}

@media (width >= 480px) {
  /* style */
}

@media (480px <= width <= 1024px) {
  /* style */
}
  `;

  screen_orientation = `
@media (orientation: portrait) {
  /* style */
}

@media (orientation: landscape) {
  /* style */
}
  `;

  device_type = `
@media print {
  /* style */
}

@media screen {
  /* style */
}

@media all {
  /* style */
}

@media speech {
  /* style */
}

@media screen, print {
  /* style */
}
  `;
}
