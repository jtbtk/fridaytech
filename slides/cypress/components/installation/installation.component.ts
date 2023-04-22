import { Component } from '@angular/core';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
})
export class InstallationComponent {
  install_command = 'npm install cypress --save-dev';

  open_command = 'npx cypress open';

  run_command = 'npx cypress run';
}
