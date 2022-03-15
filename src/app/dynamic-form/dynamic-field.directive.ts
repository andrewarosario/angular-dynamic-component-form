import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicFormConfig } from './dynamic-form-config.model';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './dynamic-form-select/dynamic-form-select.component';

const components = {
  input: DynamicFormInputComponent,
  select: DynamicFormSelectComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input('appDynamicField') config: DynamicFormConfig;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const component = components[this.config.type];
    const componentRef = this.viewContainerRef.createComponent(
      component
    ) as any;
    componentRef.instance.config = this.config;
  }
}
