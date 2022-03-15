import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() config = [];
  form = new FormGroup({});

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.config.forEach((control) =>
      this.form.addControl(control.name, new FormControl(''))
    );
  }
}
