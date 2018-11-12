/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
export class AnimatedStackService {
    constructor() {
        this._destroy$ = new Subject();
        this.destroy$ = this._destroy$.asObservable();
        this._destroyed$ = new Subject();
        this.destroyed$ = this._destroyed$.asObservable();
    }
    /**
     * @param {?} id
     * @param {?} delayTime
     * @return {?}
     */
    destroy(id, delayTime) {
        this._destroy$.next(id);
        return of(id).pipe(delay(delayTime), tap(_ => this._destroyed$.next(id)));
    }
}
AnimatedStackService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AnimatedStackService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    AnimatedStackService.prototype._destroy$;
    /** @type {?} */
    AnimatedStackService.prototype.destroy$;
    /** @type {?} */
    AnimatedStackService.prototype._destroyed$;
    /** @type {?} */
    AnimatedStackService.prototype.destroyed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtc3RhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWFuaW1hdGVkLWNhcmQtc3RhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVDLE1BQU0sT0FBTyxvQkFBb0I7SUFNL0I7UUFMUSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMxQyxhQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFN0IsQ0FBQzs7Ozs7O0lBRWpCLE9BQU8sQ0FBQyxFQUFVLEVBQUUsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3BDLENBQUM7SUFDSixDQUFDOzs7WUFmRixVQUFVOzs7Ozs7SUFFVCx5Q0FBMEM7O0lBQzFDLHdDQUF5Qzs7SUFDekMsMkNBQTRDOztJQUM1QywwQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFN0YWNrU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgZGVzdHJveSQgPSB0aGlzLl9kZXN0cm95JC5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9kZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIGRlc3Ryb3llZCQgPSB0aGlzLl9kZXN0cm95ZWQkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBkZXN0cm95KGlkOiBzdHJpbmcsIGRlbGF5VGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KGlkKTtcclxuICAgIHJldHVybiBvZihpZCkucGlwZShcclxuICAgICAgZGVsYXkoZGVsYXlUaW1lKSxcclxuICAgICAgdGFwKF8gPT4gdGhpcy5fZGVzdHJveWVkJC5uZXh0KGlkKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==