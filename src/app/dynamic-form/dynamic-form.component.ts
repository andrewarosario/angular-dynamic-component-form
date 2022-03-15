import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig = [];
  form = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formConfig.forEach((control) =>
      this.form.addControl(control.name, new FormControl(''))
    );
  }
}
