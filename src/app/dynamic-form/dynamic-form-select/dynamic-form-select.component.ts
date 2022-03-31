import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { DynamicControl } from '../interfaces/dynamic-control.interface';
import { DynamicFormConfig } from '../models/dynamic-form-config.model';

@Component({
  selector: 'app-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrls: ['./dynamic-form-select.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class DynamicFormSelectComponent implements DynamicControl {
  config: DynamicFormConfig;
}
