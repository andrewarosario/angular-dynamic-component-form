import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './control-errors.directive';
import { ControlErrorComponent } from './control-error/control-error.component';
import { FormSubmitDirective } from './form-submit.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ControlErrorsDirective,
    ControlErrorComponent,
    FormSubmitDirective,
  ],
  exports: [ControlErrorsDirective],
})
export class ControlErrorsModule {}
