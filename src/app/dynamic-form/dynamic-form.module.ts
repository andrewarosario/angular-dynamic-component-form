import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './dynamic-form-select/dynamic-form-select.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { ControlErrorsModule } from '../control-errors/control-errors.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ControlErrorsModule],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    DynamicFormInputComponent,
    DynamicFormSelectComponent,
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
