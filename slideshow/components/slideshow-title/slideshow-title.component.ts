import { Component, Inject, OnInit } from '@angular/core';
import { TableOfContentsService } from '../../services/table-of-contents.service';
import { CurrentIndexService } from '../../services/current-index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slideshow-title',
  templateUrl: './slideshow-title.component.html',
})
export class SlideshowTitleComponent implements OnInit {
  title = '';

  constructor(
    private currentIndexService: CurrentIndexService,
    private tocService: TableOfContentsService,
    protected router: Router,
    @Inject('module') private _module: string
  ) {}

  ngOnInit(): void {
    this.tocService.getSlideById(this._module, this.currentIndexService.get()).subscribe((slide) => {
      this.title = slide.title;
    });
  }
}
