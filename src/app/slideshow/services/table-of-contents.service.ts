import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Presentation, Slide } from '../models/slide';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class TableOfContentsService {
  private slidesUrl = '/assets/slideshow/json/slides-definition.json';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getSlides(module: string): Observable<Slide[]> {
    return this.http.get<Presentation[]>(this.slidesUrl).pipe(
      map((res) => {
        const presentation = res.find((slide) => slide.module === module);

        if (!presentation || presentation.slides?.length === 0) {
          throw new Error(`No presentation found for ${module}`);
        }

        return presentation.slides;
      }),
      catchError((err) => {
        console.error('Error retrieving slides:', err);
        const message = 'An error occurred while retrieving slides.';
        this.snackBar.open(message, 'Close', { duration: 5000 });
        return throwError(() => new Error(message));
      })
    );
  }

  getSlideById(module: string, id: number): Observable<Slide> {
    return this.http.get<Presentation[]>(this.slidesUrl).pipe(
      map((res) => {
        const presentation = res.find((pres) => pres.module === module);

        if (!presentation || presentation.slides?.length === 0) {
          throw new Error(`No presentation found for ${module}`);
        }

        const slide = presentation.slides.find((slide) => slide.id === id + 1);

        if (!slide) {
          throw new Error(`No slide found for ${id + 1}`);
        }

        return slide;
      }),
      catchError((err) => {
        console.error('Error retrieving slides:', err);
        const message = 'An error occurred while retrieving slides.';
        this.snackBar.open(message, 'Close', { duration: 5000 });
        return throwError(() => new Error(message));
      })
    );
  }
}
