import { Component, Inject, OnInit } from '@angular/core';
import { Slide } from '../../models/slide';
import { TableOfContentsService } from '../../services/table-of-contents.service';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
})
export class TocComponent implements OnInit {
  slides: Slide[] = [];

  constructor(private tocService: TableOfContentsService, @Inject('module') private _module: string) {}

  ngOnInit(): void {
    this.tocService.getSlides(this._module).subscribe((slides) => {
      this.slides = slides;
    });
  }

  getPadding(i: number): string {
    const mod = this.slides[i].position.split(':');
    const module = mod[0];
    const type = mod[1];

    if (type === 'parent' && module !== this._module) {
      return 'pt-4';
    } else if (type === 'child') {
      return 'pl-12';
    } else if (type === 'subchild') {
      return 'pl-20';
    }
    return '';
  }
}
