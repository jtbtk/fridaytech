import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { SlideshowComponent } from '../../slideshow/components/slideshow/slideshow.component';
import { TocComponent } from '../../slideshow/components/toc/toc.component';
import { AdditionalResourceListComponent } from '../../slideshow/components/additional-resource-list/additional-resource-list.component';
import { SlideshowModule } from 'src/app/slideshow/slideshow.module';
import { InstallationComponent } from './components/installation/installation.component';
import { FundamentalsComponent } from './components/fundamentals/fundamentals.component';

const cypressRoutes: Routes = [
  {
    path: '',
    component: SlideshowComponent,
    children: [
      {
        path: '',
        component: CoverComponent,
      },
      {
        path: 'installation',
        component: InstallationComponent,
      },
      {
        path: 'fundamentals',
        component: FundamentalsComponent,
      },
      {
        path: 'toc',
        component: TocComponent,
      },
      {
        path: 'cypress',
        component: TocComponent,
      },
      {
        path: 'conclusion',
        component: ConclusionComponent,
      },
      {
        path: 'resources',
        component: AdditionalResourceListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [CoverComponent, ConclusionComponent, InstallationComponent, FundamentalsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild(cypressRoutes),
    SlideshowModule,
  ],
  providers: [{ provide: 'module', useValue: 'cypress' }],
})
export class CypressModule {}
