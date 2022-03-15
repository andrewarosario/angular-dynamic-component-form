import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
