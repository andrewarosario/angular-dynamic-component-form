import { Component } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicControl } from '../interfaces/dynamic-control.interface';
import { DynamicFormConfig } from '../models/dynamic-form-config.model';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DynamicFormInputComponent implements DynamicControl {
  config: DynamicFormConfig;
}
