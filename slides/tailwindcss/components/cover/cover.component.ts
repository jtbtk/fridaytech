import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
})
export class CoverComponent implements OnInit {
  title: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }
}
