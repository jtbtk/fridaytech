import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrismComponent } from './components/prism/prism.component';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';

@NgModule({
  declarations: [PrismComponent],
  imports: [CommonModule],
  exports: [PrismComponent],
})
export class SharedModule {}
