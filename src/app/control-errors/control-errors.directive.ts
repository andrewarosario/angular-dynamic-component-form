import { Directive, OnDestroy, OnInit, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  constructor(@Self() private ngControl: NgControl) {}

  ngOnInit(): void {
    this.ngControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // handle errors
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
