import {
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { DynamicFormConfig, Fields } from './models/dynamic-form-config.model';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './dynamic-form-select/dynamic-form-select.component';
import { DynamicControl } from './interfaces/dynamic-control.interface';

type ComponentFields = {
  [Property in Fields]: Type<DynamicControl>;
};

const components: ComponentFields = {
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
    const component = components[this.config.type.field];
    const componentRef = this.viewContainerRef.createComponent(component);
    componentRef.instance.config = this.config;
  }
}
