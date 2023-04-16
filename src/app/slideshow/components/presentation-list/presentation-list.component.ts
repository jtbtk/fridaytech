import { Component, OnInit } from '@angular/core';
import { PresentationService } from '../../services/presentation.service';
import { Resource } from '../../models/resources';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
})
export class PresentationListComponent implements OnInit {
  presentations: Resource[] = [];

  constructor(private presentationService: PresentationService) {}

  ngOnInit() {
    this.presentationService.getPresentations().subscribe((presentations) => {
      this.presentations = presentations;
    });
  }
}
