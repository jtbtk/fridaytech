import { Component, Input } from '@angular/core';
import { Resource } from '../../../models/resources';

@Component({
  selector: 'app-additional-resource-item',
  templateUrl: './additional-resource-item.component.html',
})
export class AdditonalResourceItemComponent {
  @Input() additionalResource!: Resource;
}
