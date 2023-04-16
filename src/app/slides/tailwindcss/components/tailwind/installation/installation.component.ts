import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-installation',
  templateUrl: './installation.component.html',
})
export class InstallationComponent {
  step_1 = `
npm install -D tailwindcss
`;
  step_2 = `
npx tailwindcss init
`;
}
