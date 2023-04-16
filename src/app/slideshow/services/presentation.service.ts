import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../models/resources';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  private presentationsUrl = '/assets/slideshow/json/presentations.json';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getPresentations(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.presentationsUrl).pipe(
      catchError((err) => {
        console.error('Error retrieving presentations:', err);
        const message = 'An error occurred while retrieving presentations.';
        this.snackBar.open(message, 'Close', { duration: 5000 });
        return throwError(() => new Error(message));
      })
    );
  }
}
