import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent, DynamicFormInputComponent],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
