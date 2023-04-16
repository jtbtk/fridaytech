import { Component, Input } from '@angular/core';
import { Resource } from '../../../models/resources';

@Component({
  selector: 'app-presentation-item',
  templateUrl: './presentation-item.component.html',
})
export class PresentationItemComponent {
  @Input() presentation!: Resource;
}
