import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable()
export class AnimatedStackService {
  private _destroy$ = new Subject<string>();
  destroy$ = this._destroy$.asObservable();
  private _destroyed$ = new Subject<string>();
  destroyed$ = this._destroyed$.asObservable();

  constructor() { }

  destroy(id: string, delayTime: number) {
    this._destroy$.next(id);
    return of(id).pipe(
      delay(delayTime),
      tap(_ => this._destroyed$.next(id))
    );
  }
}
