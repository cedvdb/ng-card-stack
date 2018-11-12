/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { AnimatedStackService } from '../../services/animated-stack.service';
var AnimatedCardComponent = /** @class */ (function () {
    function AnimatedCardComponent(stackSrv, elemRef, renderer) {
        this.stackSrv = stackSrv;
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.delay = 400;
    }
    /**
     * @return {?}
     */
    AnimatedCardComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.elemRef.nativeElement, 'transition', this.delay + "ms transform");
    };
    /**
     * @return {?}
     */
    AnimatedCardComponent.prototype.destroy = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.elemRef.nativeElement, 'visibility', 'hidden');
        return this.stackSrv.destroy(this.id, this.delay);
    };
    /**
     * @return {?}
     */
    AnimatedCardComponent.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        return ((/** @type {?} */ (this.elemRef.nativeElement))).getBoundingClientRect();
    };
    /**
     * @return {?}
     */
    AnimatedCardComponent.prototype.getElement = /**
     * @return {?}
     */
    function () {
        return this.elemRef.nativeElement;
    };
    AnimatedCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'x-animated-card',
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AnimatedCardComponent.ctorParameters = function () { return [
        { type: AnimatedStackService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    AnimatedCardComponent.propDecorators = {
        id: [{ type: Input }]
    };
    return AnimatedCardComponent;
}());
export { AnimatedCardComponent };
if (false) {
    /**
     * index of the item in the list
     * @type {?}
     */
    AnimatedCardComponent.prototype.id;
    /** @type {?} */
    AnimatedCardComponent.prototype.delay;
    /** @type {?} */
    AnimatedCardComponent.prototype.deleted;
    /** @type {?} */
    AnimatedCardComponent.prototype.stackSrv;
    /** @type {?} */
    AnimatedCardComponent.prototype.elemRef;
    /** @type {?} */
    AnimatedCardComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hbmltYXRlZC1jYXJkLXN0YWNrLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHN0U7SUFZRSwrQkFDVSxRQUE4QixFQUM5QixPQUFtQixFQUNuQixRQUFtQjtRQUZuQixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFON0IsVUFBSyxHQUFHLEdBQUcsQ0FBQztJQU9SLENBQUM7Ozs7SUFFTCwrQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUssSUFBSSxDQUFDLEtBQUssaUJBQWMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7SUFFRCx1Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsMkNBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFlLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCwwQ0FBVTs7O0lBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IscUNBQTZDO29CQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVJRLG9CQUFvQjtnQkFEK0IsVUFBVTtnQkFBUyxTQUFTOzs7cUJBWXJGLEtBQUs7O0lBMkJSLDRCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0E3QlkscUJBQXFCOzs7Ozs7SUFFaEMsbUNBQW9COztJQUNwQixzQ0FBWTs7SUFDWix3Q0FBaUI7O0lBR2YseUNBQXNDOztJQUN0Qyx3Q0FBMkI7O0lBQzNCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0ZWRTdGFja1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmltYXRlZC1zdGFjay5zZXJ2aWNlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3gtYW5pbWF0ZWQtY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuaW1hdGVkLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLWNhcmQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLyoqIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBsaXN0ICovXHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBkZWxheSA9IDQwMDtcclxuICBkZWxldGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgc3RhY2tTcnY6IEFuaW1hdGVkU3RhY2tTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCBgJHt0aGlzLmRlbGF5fW1zIHRyYW5zZm9ybWApO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhY2tTcnYuZGVzdHJveSh0aGlzLmlkLCB0aGlzLmRlbGF5KTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuICh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbn1cclxuIl19