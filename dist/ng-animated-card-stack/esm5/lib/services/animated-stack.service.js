/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
var AnimatedStackService = /** @class */ (function () {
    function AnimatedStackService() {
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
    AnimatedStackService.prototype.destroy = /**
     * @param {?} id
     * @param {?} delayTime
     * @return {?}
     */
    function (id, delayTime) {
        var _this = this;
        this._destroy$.next(id);
        return of(id).pipe(delay(delayTime), tap(function (_) { return _this._destroyed$.next(id); }));
    };
    AnimatedStackService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AnimatedStackService.ctorParameters = function () { return []; };
    return AnimatedStackService;
}());
export { AnimatedStackService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtc3RhY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWFuaW1hdGVkLWNhcmQtc3RhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDO0lBT0U7UUFMUSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMxQyxhQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFN0IsQ0FBQzs7Ozs7O0lBRWpCLHNDQUFPOzs7OztJQUFQLFVBQVEsRUFBVSxFQUFFLFNBQWlCO1FBQXJDLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoQixLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQ3BDLENBQUM7SUFDSixDQUFDOztnQkFmRixVQUFVOzs7O0lBZ0JYLDJCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FmWSxvQkFBb0I7OztJQUMvQix5Q0FBMEM7O0lBQzFDLHdDQUF5Qzs7SUFDekMsMkNBQTRDOztJQUM1QywwQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlbGF5LCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFN0YWNrU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveSQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgZGVzdHJveSQgPSB0aGlzLl9kZXN0cm95JC5hc09ic2VydmFibGUoKTtcclxuICBwcml2YXRlIF9kZXN0cm95ZWQkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIGRlc3Ryb3llZCQgPSB0aGlzLl9kZXN0cm95ZWQkLmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBkZXN0cm95KGlkOiBzdHJpbmcsIGRlbGF5VGltZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KGlkKTtcclxuICAgIHJldHVybiBvZihpZCkucGlwZShcclxuICAgICAgZGVsYXkoZGVsYXlUaW1lKSxcclxuICAgICAgdGFwKF8gPT4gdGhpcy5fZGVzdHJveWVkJC5uZXh0KGlkKSlcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==