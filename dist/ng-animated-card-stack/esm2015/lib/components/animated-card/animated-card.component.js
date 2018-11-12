/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { AnimatedStackService } from '../../services/animated-stack.service';
export class AnimatedCardComponent {
    /**
     * @param {?} stackSrv
     * @param {?} elemRef
     * @param {?} renderer
     */
    constructor(stackSrv, elemRef, renderer) {
        this.stackSrv = stackSrv;
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.delay = 400;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.setStyle(this.elemRef.nativeElement, 'transition', `${this.delay}ms transform`);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.renderer.setStyle(this.elemRef.nativeElement, 'visibility', 'hidden');
        return this.stackSrv.destroy(this.id, this.delay);
    }
    /**
     * @return {?}
     */
    getPosition() {
        return ((/** @type {?} */ (this.elemRef.nativeElement))).getBoundingClientRect();
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.elemRef.nativeElement;
    }
}
AnimatedCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'x-animated-card',
                template: "<ng-content></ng-content>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
AnimatedCardComponent.ctorParameters = () => [
    { type: AnimatedStackService },
    { type: ElementRef },
    { type: Renderer2 }
];
AnimatedCardComponent.propDecorators = {
    id: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1hbmltYXRlZC1jYXJkLXN0YWNrLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFTN0UsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBTWhDLFlBQ1UsUUFBOEIsRUFDOUIsT0FBbUIsRUFDbkIsUUFBbUI7UUFGbkIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTjdCLFVBQUssR0FBRyxHQUFHLENBQUM7SUFPUixDQUFDOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQWUsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscUNBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFSUSxvQkFBb0I7WUFEK0IsVUFBVTtZQUFTLFNBQVM7OztpQkFZckYsS0FBSzs7Ozs7OztJQUFOLG1DQUFvQjs7SUFDcEIsc0NBQVk7O0lBQ1osd0NBQWlCOztJQUdmLHlDQUFzQzs7SUFDdEMsd0NBQTJCOztJQUMzQix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKiBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgbGlzdCAqL1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgZGVsYXkgPSA0MDA7XHJcbiAgZGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYCR7dGhpcy5kZWxheX1tcyB0cmFuc2Zvcm1gKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIHJldHVybiB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kodGhpcy5pZCwgdGhpcy5kZWxheSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==