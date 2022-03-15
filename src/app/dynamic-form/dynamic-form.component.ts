import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DynamicFormConfig } from './dynamic-form-config.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() config: DynamicFormConfig[] = [];
  @Output() save = new EventEmitter();
  form = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.config.forEach((control) =>
      this.form.addControl(
        control.name,
        new FormControl(control.initialValue, control.validation)
      )
    );
  }

  submit() {
    this.save.emit(this.form.value);
    this.form.markAsPristine();
  }
}
