import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionComponent } from './introduction/introduction.component';
import { MediaQueriesComponent } from './media-queries/media-queries.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowModule } from '../../../../slideshow/slideshow.module';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
  },
  {
    path: 'flexbox',
    component: FlexboxComponent,
  },
  {
    path: 'media-queries',
    component: MediaQueriesComponent,
  },
];

@NgModule({
  declarations: [IntroductionComponent, MediaQueriesComponent, FlexboxComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes), SlideshowModule],
})
export class ResponsiveDesignModule {}
