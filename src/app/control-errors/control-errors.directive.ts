import {
  ComponentRef,
  Directive,
  Host,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlErrorComponent } from './control-error/control-error.component';
import { FORM_ERRORS } from './form-errors';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  componentRef: ComponentRef<ControlErrorComponent>;
  submit$: Observable<Event>;
  destroy$ = new Subject<void>();

  constructor(
    @Self() private ngControl: NgControl,
    private viewContainerRef: ViewContainerRef,
    @Inject(FORM_ERRORS) private errors,
    @Optional() @Host() private form: FormSubmitDirective
  ) {
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    merge(this.submit$, this.ngControl.valueChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const controlErrors = this.ngControl.errors;
        if (controlErrors) {
          const [firstKey] = Object.keys(controlErrors);
          const getError = this.errors[firstKey];
          const text = getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.componentRef) {
          this.setError(null);
        }
      });
  }

  setError(text: string) {
    if (!this.componentRef) {
      this.componentRef = this.viewContainerRef.createComponent(
        ControlErrorComponent
      );
    }

    this.componentRef.instance.text = text;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
