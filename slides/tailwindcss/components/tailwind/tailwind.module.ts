import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { IntroductionComponent } from './introduction/introduction.component';
import { InstallationComponent } from './installation/installation.component';
import { JitComponent } from './jit/jit.component';
import { CustomizationComponent } from './customization/customization.component';
import { DemonstrationComponent } from './demonstration/demonstration.component';
import { IntegrationMaterialComponent } from './integration-material/integration-material.component';
import { InstallationEndComponent } from './installation-end/installation-end.component';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowModule } from '../../../../slideshow/slideshow.module';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'utilisation',
    component: DemonstrationComponent,
  },
  {
    path: 'installation',
    component: InstallationComponent,
  },
  {
    path: 'jit',
    component: JitComponent,
  },
  {
    path: 'installation-end',
    component: InstallationEndComponent,
  },
  {
    path: 'customization',
    component: CustomizationComponent,
  },
  {
    path: 'integration-material',
    component: IntegrationMaterialComponent,
  },
];

@NgModule({
  declarations: [
    IntroductionComponent,
    InstallationComponent,
    JitComponent,
    CustomizationComponent,
    DemonstrationComponent,
    IntegrationMaterialComponent,
    InstallationEndComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    SharedModule,
    RouterModule.forChild(routes),
    SlideshowModule,
  ],
})
export class TailwindModule {}
