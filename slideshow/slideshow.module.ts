import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { AdditionalResourceListComponent } from './components/additional-resource-list/additional-resource-list.component';
import { TocComponent } from './components/toc/toc.component';
import { PresentationItemComponent } from './components/presentation-list/presentation-item/presentation-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AdditonalResourceItemComponent } from './components/additional-resource-list/additional-resource-item/additonal-resource-item.component';
import { SlideshowTitleComponent } from './components/slideshow-title/slideshow-title.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  exports: [
    SlideshowComponent,
    PresentationListComponent,
    AdditionalResourceListComponent,
    TocComponent,
    SlideshowTitleComponent,
  ],
  declarations: [
    SlideshowComponent,
    PresentationListComponent,
    AdditionalResourceListComponent,
    TocComponent,
    PresentationItemComponent,
    AdditonalResourceItemComponent,
    SlideshowTitleComponent,
  ],
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule, RouterOutlet, MatProgressBarModule],
})
export class SlideshowModule {}
