import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './control-errors.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlErrorsDirective],
  exports: [ControlErrorsDirective],
})
export class ControlErrorsModule {}
