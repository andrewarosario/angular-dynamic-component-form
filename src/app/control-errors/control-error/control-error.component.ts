import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.css'],
})
export class ControlErrorComponent {
  _text: string;

  @Input() set text(value: string) {
    if (value !== this._text) {
      this._text = value;
    }
  }
}
