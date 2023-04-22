import { Component, Inject, OnInit } from '@angular/core';
import { Slide } from '../../models/slide';
import { Router } from '@angular/router';
import { TableOfContentsService } from '../../services/table-of-contents.service';
import { CurrentIndexService } from '../../services/current-index.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
})
export class SlideshowComponent implements OnInit {
  slides: Slide[] = [];

  _percentage: number;

  constructor(
    protected tocService: TableOfContentsService,
    protected currentIndexService: CurrentIndexService,
    protected router: Router,
    @Inject('module') private _module: string
  ) {
    this.currentIndexService.zero();

    this._percentage = 0;
  }

  get percentage(): number {
    return this._percentage;
  }

  private updatePercentage() {
    this._percentage = (this.currentIndexService.get() / (this.slides.length - 1)) * 100;
  }

  ngOnInit() {
    this.tocService.getSlides(this._module).subscribe((slides) => {
      this.slides = slides;
    });
  }

  goHome() {
    this.router.navigateByUrl('');
  }

  private navigateByUrl() {
    this.router.navigateByUrl(this.slides[this.currentIndexService.get()].path);
  }

  goToCover() {
    this.currentIndexService.zero();
    this.navigateByUrl();
    this.updatePercentage();
  }

  nextSlide() {
    if (this.currentIndexService.get() < this.slides.length - 1) {
      this.currentIndexService.next();
      this.navigateByUrl();
      this.updatePercentage();
    }
  }

  prevSlide() {
    if (this.currentIndexService.get() > 0) {
      this.currentIndexService.previous();
      this.navigateByUrl();
      this.updatePercentage();
    }
  }
}
