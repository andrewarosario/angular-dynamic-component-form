import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './control-errors.directive';
import { ControlErrorComponent } from './control-error/control-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorsDirective, ControlErrorComponent],
  exports: [ControlErrorsDirective],
})
export class ControlErrorsModule {}
