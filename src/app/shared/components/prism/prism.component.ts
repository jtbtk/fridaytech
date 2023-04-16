import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-prism',
  templateUrl: './prism.component.html',
})
export class PrismComponent implements AfterViewInit {
  @ViewChild('codeEle') codeEle!: ElementRef;

  @Input() code?: string;
  @Input() language?: string;

  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle.nativeElement);
  }
}
