import { Component, Inject, OnInit } from '@angular/core';
import { AdditionalResourcesService } from '../../services/additional-resources.service';
import { Resource } from '../../models/resources';

@Component({
  selector: 'app-additional-resource-list',
  templateUrl: './additional-resource-list.component.html',
})
export class AdditionalResourceListComponent implements OnInit {
  additionalResources: Resource[] = [];

  constructor(
    protected additionalResourcesService: AdditionalResourcesService,
    @Inject('module') private _module: string
  ) {}

  ngOnInit() {
    this.additionalResourcesService.getAdditionalResources(this._module).subscribe((additionalResources) => {
      this.additionalResources = additionalResources;
    });
  }
}
