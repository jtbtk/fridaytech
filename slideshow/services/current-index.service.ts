import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentIndexService {
  private currentIndex!: number;

  next(): number {
    this.currentIndex = this.currentIndex + 1;
    return this.currentIndex;
  }

  previous(): number {
    this.currentIndex = this.currentIndex - 1;
    return this.currentIndex;
  }

  zero(): number {
    this.currentIndex = 0;
    return this.currentIndex;
  }

  get(): number {
    console.log(this.currentIndex);
    return this.currentIndex;
  }
}
