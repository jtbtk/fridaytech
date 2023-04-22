import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-jit',
  templateUrl: './jit.component.html',
})
export class JitComponent {
  example_html = `
<div class="w-full bg-[#8e07e7] text-center text-3xl text-[#d9d1dd] lg:text-5xl">Exemple</div>
`;

  example_css = `
.jit {
  @apply w-full bg-[#8e07e7] text-center text-3xl text-[#d9d1dd] lg:text-5xl
}
`;
}
