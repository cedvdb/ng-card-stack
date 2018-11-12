import { Injectable, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ContentChildren, NgModule } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * animated component 💋🐱‍🐉👢🥟🔥
 */
var AnimatedStackComponent = /** @class */ (function () {
    function AnimatedStackComponent(stackSrv, renderer, elemRef) {
        this.stackSrv = stackSrv;
        this.renderer = renderer;
        this.elemRef = elemRef;
    }
    /**
     * @return {?}
     */
    AnimatedStackComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // when a card has been destroyed we get its index
        this.stackSrv.destroy$.subscribe(function (id) {
            // getting the non deleted elements
            /** @type {?} */
            var cardArray = _this.cards.map(function (card) { return card; })
                .filter(function (card) { return !card.deleted; });
            /** @type {?} */
            var index = cardArray.findIndex(function (card) { return card.id === id; });
            for (var i = index + 1; i < cardArray.length; i++) {
                // we now need to modify next card
                /** @type {?} */
                var card = cardArray[i];
                /** @type {?} */
                var lastCoords = cardArray[i - 1].getPosition();
                /** @type {?} */
                var currentCoords = card.getPosition();
                _this.applyTranslation(card.getElement(), lastCoords, currentCoords);
            }
        });
        // we need to reset the translation after changes
        this.stackSrv.destroyed$.subscribe(function (id) {
            /** @type {?} */
            var cardArray = _this.cards.map(function (card) { return card; });
            /** @type {?} */
            var index = cardArray.findIndex(function (card) { return card.id === id; });
            /** @type {?} */
            var deletedCard = cardArray[index];
            /** @type {?} */
            var cardElem = deletedCard.getElement();
            deletedCard.deleted = true;
            _this.renderer.setStyle(cardElem, 'display', 'none');
            for (var i = index + 1; i < cardArray.length; i++) {
                // we reset styles
                /** @type {?} */
                var nextElem = cardArray[i].getElement();
                _this.renderer.setStyle(nextElem, 'transform', 'none');
                _this.renderer.setStyle(nextElem, 'transition', 'none');
            }
        });
    };
    /**
     * @param {?} elem
     * @param {?} lastCoords
     * @param {?} currentCoords
     * @return {?}
     */
    AnimatedStackComponent.prototype.applyTranslation = /**
     * @param {?} elem
     * @param {?} lastCoords
     * @param {?} currentCoords
     * @return {?}
     */
    function (elem, lastCoords, currentCoords) {
        /** @type {?} */
        var dx = lastCoords.x - currentCoords.x;
        /** @type {?} */
        var dy = lastCoords.y - currentCoords.y;
        this.renderer.setStyle(elem, 'transition', '300ms transform');
        this.renderer.setStyle(elem, 'transform', "translate3d(" + dx + "px, " + dy + "px, 0)");
    };
    AnimatedStackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'x-animated-stack',
                    template: "<ng-content select=\"x-animated-card\"></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [AnimatedStackService],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AnimatedStackComponent.ctorParameters = function () { return [
        { type: AnimatedStackService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AnimatedStackComponent.propDecorators = {
        cards: [{ type: ContentChildren, args: [AnimatedCardComponent,] }]
    };
    return AnimatedStackComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AnimatedCardStackModule = /** @class */ (function () {
    function AnimatedCardStackModule() {
    }
    AnimatedCardStackModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [AnimatedStackComponent, AnimatedCardComponent],
                    exports: [AnimatedStackComponent, AnimatedCardComponent]
                },] }
    ];
    return AnimatedCardStackModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AnimatedStackService, AnimatedCardComponent, AnimatedStackComponent, AnimatedCardStackModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYW5pbWF0ZWQtY2FyZC1zdGFjay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZS50cyIsIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL2FuaW1hdGVkLWNhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1hbmltYXRlZC1jYXJkLXN0YWNrL2xpYi9jb21wb25lbnRzL2FuaW1hdGVkLXN0YWNrL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvYW5pbWF0ZWQtY2FyZC1zdGFjay5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTdGFja1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIGRlc3Ryb3kkID0gdGhpcy5fZGVzdHJveSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBkZXN0cm95ZWQkID0gdGhpcy5fZGVzdHJveWVkJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZGVzdHJveShpZDogc3RyaW5nLCBkZWxheVRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVzdHJveSQubmV4dChpZCk7XHJcbiAgICByZXR1cm4gb2YoaWQpLnBpcGUoXHJcbiAgICAgIGRlbGF5KGRlbGF5VGltZSksXHJcbiAgICAgIHRhcChfID0+IHRoaXMuX2Rlc3Ryb3llZCQubmV4dChpZCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKiBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgbGlzdCAqL1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgZGVsYXkgPSA0MDA7XHJcbiAgZGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYCR7dGhpcy5kZWxheX1tcyB0cmFuc2Zvcm1gKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIHJldHVybiB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kodGhpcy5pZCwgdGhpcy5kZWxheSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0ZWRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG4vKipcclxuICogYW5pbWF0ZWQgY29tcG9uZW50IMOwwp/CksKLw7DCn8KQwrHDosKAwo3DsMKfwpDCicOwwp/CkcKiw7DCn8Klwp/DsMKfwpTCpVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLXN0YWNrJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5pbWF0ZWQtc3RhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbQW5pbWF0ZWRTdGFja1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFN0YWNrQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihBbmltYXRlZENhcmRDb21wb25lbnQpIGNhcmRzOiBRdWVyeUxpc3Q8QW5pbWF0ZWRDYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIHdoZW4gYSBjYXJkIGhhcyBiZWVuIGRlc3Ryb3llZCB3ZSBnZXQgaXRzIGluZGV4XHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIC8vIGdldHRpbmcgdGhlIG5vbiBkZWxldGVkIGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IGNhcmRBcnJheSA9IHRoaXMuY2FyZHMubWFwKGNhcmQgPT4gY2FyZClcclxuICAgICAgICAuZmlsdGVyKGNhcmQgPT4gIWNhcmQuZGVsZXRlZCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FyZEFycmF5LmZpbmRJbmRleChjYXJkID0+IGNhcmQuaWQgPT09IGlkKTtcclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIG5vdyBuZWVkIHRvIG1vZGlmeSBuZXh0IGNhcmRcclxuICAgICAgICBjb25zdCBjYXJkID0gY2FyZEFycmF5W2ldO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDb29yZHMgPSBjYXJkQXJyYXlbaSAtIDFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkcyA9IGNhcmQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNsYXRpb24oY2FyZC5nZXRFbGVtZW50KCksIGxhc3RDb29yZHMsIGN1cnJlbnRDb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0cmFuc2xhdGlvbiBhZnRlciBjaGFuZ2VzXHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3llZCQuc3Vic2NyaWJlKGlkID0+IHtcclxuICAgICAgY29uc3QgY2FyZEFycmF5ID0gdGhpcy5jYXJkcy5tYXAoY2FyZCA9PiBjYXJkKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBjYXJkQXJyYXkuZmluZEluZGV4KGNhcmQgPT4gY2FyZC5pZCA9PT0gaWQpO1xyXG4gICAgICBjb25zdCBkZWxldGVkQ2FyZCA9IGNhcmRBcnJheVtpbmRleF07XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtID0gZGVsZXRlZENhcmQuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBkZWxldGVkQ2FyZC5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjYXJkRWxlbSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIHJlc2V0IHN0eWxlc1xyXG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gY2FyZEFycmF5W2ldLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNmb3JtJywgJ25vbmUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNpdGlvbicsICdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlUcmFuc2xhdGlvbihlbGVtLCBsYXN0Q29vcmRzLCBjdXJyZW50Q29vcmRzKSB7XHJcbiAgICBjb25zdCBkeCA9IGxhc3RDb29yZHMueCAtIGN1cnJlbnRDb29yZHMueDtcclxuICAgIGNvbnN0IGR5ID0gbGFzdENvb3Jkcy55IC0gY3VycmVudENvb3Jkcy55O1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtLCAndHJhbnNpdGlvbicsICczMDBtcyB0cmFuc2Zvcm0nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke2R4fXB4LCAke2R5fXB4LCAwKWApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRlZFN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLXN0YWNrL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmltYXRlZENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmltYXRlZFN0YWNrQ29tcG9uZW50LCBBbmltYXRlZENhcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5pbWF0ZWRTdGFja0NvbXBvbmVudCwgQW5pbWF0ZWRDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmltYXRlZENhcmRTdGFja01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBV0U7UUFMUSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUMxQyxhQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDNUMsZUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7S0FFNUI7Ozs7OztJQUVqQixzQ0FBTzs7Ozs7SUFBUCxVQUFRLEVBQVUsRUFBRSxTQUFpQjtRQUFyQyxpQkFNQztRQUxDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQSxDQUFDLENBQ3BDLENBQUM7S0FDSDs7Z0JBZkYsVUFBVTs7OztJQWdCWCwyQkFBQztDQWhCRDs7Ozs7O0FDSkE7SUFnQkUsK0JBQ1UsUUFBOEIsRUFDOUIsT0FBbUIsRUFDbkIsUUFBbUI7UUFGbkIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTjdCLFVBQUssR0FBRyxHQUFHLENBQUM7S0FPUDs7OztJQUVMLCtDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBSyxJQUFJLENBQUMsS0FB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