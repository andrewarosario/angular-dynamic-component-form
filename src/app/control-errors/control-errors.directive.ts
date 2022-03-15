import {
  ComponentRef,
  Directive,
  OnDestroy,
  OnInit,
  Self,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ControlErrorComponent } from './control-error/control-error.component';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  componentRef: ComponentRef<ControlErrorComponent>;
  destroy$ = new Subject<void>();

  constructor(
    @Self() private ngControl: NgControl,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.ngControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const controlErrors = this.ngControl.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = controlErrors[firstKey];
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
