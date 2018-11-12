import { Injectable, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ContentChildren, NgModule } from '@angular/core';
import { Subject, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AnimatedStackService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AnimatedCardComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * animated component 💋🐱‍🐉👢🥟🔥
 */
class AnimatedStackComponent {
    /**
     * @param {?} stackSrv
     * @param {?} renderer
     * @param {?} elemRef
     */
    constructor(stackSrv, renderer, elemRef) {
        this.stackSrv = stackSrv;
        this.renderer = renderer;
        this.elemRef = elemRef;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // when a card has been destroyed we get its index
        this.stackSrv.destroy$.subscribe(id => {
            // getting the non deleted elements
            /** @type {?} */
            const cardArray = this.cards.map(card => card)
                .filter(card => !card.deleted);
            /** @type {?} */
            const index = cardArray.findIndex(card => card.id === id);
            for (let i = index + 1; i < cardArray.length; i++) {
                // we now need to modify next card
                /** @type {?} */
                const card = cardArray[i];
                /** @type {?} */
                const lastCoords = cardArray[i - 1].getPosition();
                /** @type {?} */
                const currentCoords = card.getPosition();
                this.applyTranslation(card.getElement(), lastCoords, currentCoords);
            }
        });
        // we need to reset the translation after changes
        this.stackSrv.destroyed$.subscribe(id => {
            /** @type {?} */
            const cardArray = this.cards.map(card => card);
            /** @type {?} */
            const index = cardArray.findIndex(card => card.id === id);
            /** @type {?} */
            const deletedCard = cardArray[index];
            /** @type {?} */
            const cardElem = deletedCard.getElement();
            deletedCard.deleted = true;
            this.renderer.setStyle(cardElem, 'display', 'none');
            for (let i = index + 1; i < cardArray.length; i++) {
                // we reset styles
                /** @type {?} */
                const nextElem = cardArray[i].getElement();
                this.renderer.setStyle(nextElem, 'transform', 'none');
                this.renderer.setStyle(nextElem, 'transition', 'none');
            }
        });
    }
    /**
     * @param {?} elem
     * @param {?} lastCoords
     * @param {?} currentCoords
     * @return {?}
     */
    applyTranslation(elem, lastCoords, currentCoords) {
        /** @type {?} */
        const dx = lastCoords.x - currentCoords.x;
        /** @type {?} */
        const dy = lastCoords.y - currentCoords.y;
        this.renderer.setStyle(elem, 'transition', '300ms transform');
        this.renderer.setStyle(elem, 'transform', `translate3d(${dx}px, ${dy}px, 0)`);
    }
}
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
AnimatedStackComponent.ctorParameters = () => [
    { type: AnimatedStackService },
    { type: Renderer2 },
    { type: ElementRef }
];
AnimatedStackComponent.propDecorators = {
    cards: [{ type: ContentChildren, args: [AnimatedCardComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class AnimatedCardStackModule {
}
AnimatedCardStackModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [AnimatedStackComponent, AnimatedCardComponent],
                exports: [AnimatedStackComponent, AnimatedCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AnimatedStackService, AnimatedCardComponent, AnimatedStackComponent, AnimatedCardStackModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYW5pbWF0ZWQtY2FyZC1zdGFjay5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZS50cyIsIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL2FuaW1hdGVkLWNhcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZy1hbmltYXRlZC1jYXJkLXN0YWNrL2xpYi9jb21wb25lbnRzL2FuaW1hdGVkLXN0YWNrL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvYW5pbWF0ZWQtY2FyZC1zdGFjay5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTdGFja1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3kkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gIGRlc3Ryb3kkID0gdGhpcy5fZGVzdHJveSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgcHJpdmF0ZSBfZGVzdHJveWVkJCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBkZXN0cm95ZWQkID0gdGhpcy5fZGVzdHJveWVkJC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZGVzdHJveShpZDogc3RyaW5nLCBkZWxheVRpbWU6IG51bWJlcikge1xyXG4gICAgdGhpcy5fZGVzdHJveSQubmV4dChpZCk7XHJcbiAgICByZXR1cm4gb2YoaWQpLnBpcGUoXHJcbiAgICAgIGRlbGF5KGRlbGF5VGltZSksXHJcbiAgICAgIHRhcChfID0+IHRoaXMuX2Rlc3Ryb3llZCQubmV4dChpZCkpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKiBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgbGlzdCAqL1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgZGVsYXkgPSA0MDA7XHJcbiAgZGVsZXRlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgYCR7dGhpcy5kZWxheX1tcyB0cmFuc2Zvcm1gKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgIHJldHVybiB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kodGhpcy5pZCwgdGhpcy5kZWxheSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiAodGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0ZWRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG4vKipcclxuICogYW5pbWF0ZWQgY29tcG9uZW50IMOwwp/CksKLw7DCn8KQwrHDosKAwo3DsMKfwpDCicOwwp/CkcKiw7DCn8Klwp/DsMKfwpTCpVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLXN0YWNrJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5pbWF0ZWQtc3RhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbQW5pbWF0ZWRTdGFja1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFN0YWNrQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihBbmltYXRlZENhcmRDb21wb25lbnQpIGNhcmRzOiBRdWVyeUxpc3Q8QW5pbWF0ZWRDYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIHdoZW4gYSBjYXJkIGhhcyBiZWVuIGRlc3Ryb3llZCB3ZSBnZXQgaXRzIGluZGV4XHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIC8vIGdldHRpbmcgdGhlIG5vbiBkZWxldGVkIGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IGNhcmRBcnJheSA9IHRoaXMuY2FyZHMubWFwKGNhcmQgPT4gY2FyZClcclxuICAgICAgICAuZmlsdGVyKGNhcmQgPT4gIWNhcmQuZGVsZXRlZCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FyZEFycmF5LmZpbmRJbmRleChjYXJkID0+IGNhcmQuaWQgPT09IGlkKTtcclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIG5vdyBuZWVkIHRvIG1vZGlmeSBuZXh0IGNhcmRcclxuICAgICAgICBjb25zdCBjYXJkID0gY2FyZEFycmF5W2ldO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDb29yZHMgPSBjYXJkQXJyYXlbaSAtIDFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkcyA9IGNhcmQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNsYXRpb24oY2FyZC5nZXRFbGVtZW50KCksIGxhc3RDb29yZHMsIGN1cnJlbnRDb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0cmFuc2xhdGlvbiBhZnRlciBjaGFuZ2VzXHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3llZCQuc3Vic2NyaWJlKGlkID0+IHtcclxuICAgICAgY29uc3QgY2FyZEFycmF5ID0gdGhpcy5jYXJkcy5tYXAoY2FyZCA9PiBjYXJkKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBjYXJkQXJyYXkuZmluZEluZGV4KGNhcmQgPT4gY2FyZC5pZCA9PT0gaWQpO1xyXG4gICAgICBjb25zdCBkZWxldGVkQ2FyZCA9IGNhcmRBcnJheVtpbmRleF07XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtID0gZGVsZXRlZENhcmQuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBkZWxldGVkQ2FyZC5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjYXJkRWxlbSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIHJlc2V0IHN0eWxlc1xyXG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gY2FyZEFycmF5W2ldLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNmb3JtJywgJ25vbmUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNpdGlvbicsICdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlUcmFuc2xhdGlvbihlbGVtLCBsYXN0Q29vcmRzLCBjdXJyZW50Q29vcmRzKSB7XHJcbiAgICBjb25zdCBkeCA9IGxhc3RDb29yZHMueCAtIGN1cnJlbnRDb29yZHMueDtcclxuICAgIGNvbnN0IGR5ID0gbGFzdENvb3Jkcy55IC0gY3VycmVudENvb3Jkcy55O1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtLCAndHJhbnNpdGlvbicsICczMDBtcyB0cmFuc2Zvcm0nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke2R4fXB4LCAke2R5fXB4LCAwKWApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmltYXRlZFN0YWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLXN0YWNrL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmltYXRlZENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmltYXRlZFN0YWNrQ29tcG9uZW50LCBBbmltYXRlZENhcmRDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5pbWF0ZWRTdGFja0NvbXBvbmVudCwgQW5pbWF0ZWRDYXJkQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmltYXRlZENhcmRTdGFja01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BS2Esb0JBQW9CO0lBTS9CO1FBTFEsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDMUMsYUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQzVDLGVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBRTVCOzs7Ozs7SUFFakIsT0FBTyxDQUFDLEVBQVUsRUFBRSxTQUFpQjtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hCLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNwQyxDQUFDO0tBQ0g7OztZQWZGLFVBQVU7Ozs7Ozs7OztBQ0pYLE1BVWEscUJBQXFCOzs7Ozs7SUFNaEMsWUFDVSxRQUE4QixFQUM5QixPQUFtQixFQUNuQixRQUFtQjtRQUZuQixhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUM5QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFON0IsVUFBSyxHQUFHLEdBQUcsQ0FBQztLQU9QOzs7O0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDO0tBQy9GOzs7O0lB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