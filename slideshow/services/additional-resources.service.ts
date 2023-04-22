import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Resource, Resources } from '../models/resources';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AdditionalResourcesService {
  private additionalResourcesUrl = '/assets/slideshow/json/additional-resources.json';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getAdditionalResources(module: string): Observable<Resource[]> {
    return this.http.get<Resources[]>(this.additionalResourcesUrl).pipe(
      map((res) => {
        const resource = res.find((resource) => resource.module === module);
        if (!resource || resource.resources?.length === 0) {
          throw new Error(`No resources found for ${module}`);
        }
        return resource.resources;
      }),
      catchError((err) => {
        console.error('Error retrieving resources:', err);
        const message = 'An error occurred while retrieving resources.';
        this.snackBar.open(message, 'Close', { duration: 5000 });
        return throwError(() => new Error(message));
      })
    );
  }
}
