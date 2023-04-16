import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-integration-material',
  templateUrl: './integration-material.component.html',
})
export class IntegrationMaterialComponent {
  codeWithoutCustomClasses = `
<mat-card>
<form>
  <mat-form-field>
    <mat-label>Favorite food</mat-label>
    <input matInput
      placeholder="Ex. Pizza" value="Sushi">
  </mat-form-field>
  <mat-form-field>
    <mat-label>Leave a comment</mat-label>
    <textarea matInput
      placeholder="Ex. It makes me feel...">
    </textarea>
  </mat-form-field>
</form>
<button mat-button color="primary"
  mat-raised-button>Primary</button>
</mat-card>
`;

  customClasses = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}

.example-mat-card {
  padding:4px;
}
`;

  codeWithCustomClasses = `
<mat-card class="example-mat-card">
  <form class="example-form">
    <mat-form-field
    class="example-full-width">
      <mat-label>Favorite food</mat-label>
      <input matInput
        placeholder="Ex. Pizza" value="Sushi">
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <mat-label>Leave a comment</mat-label>
      <textarea matInput
        placeholder="Ex. It makes me feel...">
      </textarea>
    </mat-form-field>
  </form>
  <button mat-button color="primary"
    mat-raised-button>Primary</button>
</mat-card>
`;

  codeWithTailwind = `
<mat-card class="p-1">
  <form
  class="min-w-[150px] max-w-[500px] w-full flex flex-col">
    <mat-form-field class="w-full">
      <mat-label>Favorite food</mat-label>
      <input matInput
        placeholder="Ex. Pizza" value="Sushi">
    </mat-form-field>
    <mat-form-field class="w-full">
      <mat-label>Leave a comment</mat-label>
      <textarea matInput
        placeholder="Ex. It makes me feel...">
      </textarea>
    </mat-form-field>
    </form>
    <button mat-button color="primary"
      mat-raised-button>Primary</button>
</mat-card>
  `;
}
