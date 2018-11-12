(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ng-animated-card-stack', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ng-animated-card-stack'] = {}),global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,core,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var AnimatedStackService = /** @class */ (function () {
        function AnimatedStackService() {
            this._destroy$ = new rxjs.Subject();
            this.destroy$ = this._destroy$.asObservable();
            this._destroyed$ = new rxjs.Subject();
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
                return rxjs.of(id).pipe(operators.delay(delayTime), operators.tap(function (_) { return _this._destroyed$.next(id); }));
            };
        AnimatedStackService.decorators = [
            { type: core.Injectable }
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
                return (( /** @type {?} */(this.elemRef.nativeElement))).getBoundingClientRect();
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
            { type: core.Component, args: [{
                        selector: 'x-animated-card',
                        template: "<ng-content></ng-content>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AnimatedCardComponent.ctorParameters = function () {
            return [
                { type: AnimatedStackService },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        AnimatedCardComponent.propDecorators = {
            id: [{ type: core.Input }]
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
            { type: core.Component, args: [{
                        selector: 'x-animated-stack',
                        template: "<ng-content select=\"x-animated-card\"></ng-content>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [AnimatedStackService],
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        AnimatedStackComponent.ctorParameters = function () {
            return [
                { type: AnimatedStackService },
                { type: core.Renderer2 },
                { type: core.ElementRef }
            ];
        };
        AnimatedStackComponent.propDecorators = {
            cards: [{ type: core.ContentChildren, args: [AnimatedCardComponent,] }]
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
            { type: core.NgModule, args: [{
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

    exports.AnimatedStackService = AnimatedStackService;
    exports.AnimatedCardComponent = AnimatedCardComponent;
    exports.AnimatedStackComponent = AnimatedStackComponent;
    exports.AnimatedCardStackModule = AnimatedCardStackModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYW5pbWF0ZWQtY2FyZC1zdGFjay51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWFuaW1hdGVkLWNhcmQtc3RhY2svbGliL3NlcnZpY2VzL2FuaW1hdGVkLXN0YWNrLnNlcnZpY2UudHMiLCJuZzovL25nLWFuaW1hdGVkLWNhcmQtc3RhY2svbGliL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay9saWIvY29tcG9uZW50cy9hbmltYXRlZC1zdGFjay9hbmltYXRlZC1zdGFjay5jb21wb25lbnQudHMiLCJuZzovL25nLWFuaW1hdGVkLWNhcmQtc3RhY2svbGliL2FuaW1hdGVkLWNhcmQtc3RhY2subW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3RhY2tTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBkZXN0cm95JCA9IHRoaXMuX2Rlc3Ryb3kkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIHByaXZhdGUgX2Rlc3Ryb3llZCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgZGVzdHJveWVkJCA9IHRoaXMuX2Rlc3Ryb3llZCQuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGRlc3Ryb3koaWQ6IHN0cmluZywgZGVsYXlUaW1lOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoaWQpO1xyXG4gICAgcmV0dXJuIG9mKGlkKS5waXBlKFxyXG4gICAgICBkZWxheShkZWxheVRpbWUpLFxyXG4gICAgICB0YXAoXyA9PiB0aGlzLl9kZXN0cm95ZWQkLm5leHQoaWQpKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbmltYXRlZFN0YWNrU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuaW1hdGVkLXN0YWNrLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneC1hbmltYXRlZC1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAvKiogaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGxpc3QgKi9cclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIGRlbGF5ID0gNDAwO1xyXG4gIGRlbGV0ZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdGFja1NydjogQW5pbWF0ZWRTdGFja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCAndHJhbnNpdGlvbicsIGAke3RoaXMuZGVsYXl9bXMgdHJhbnNmb3JtYCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFja1Nydi5kZXN0cm95KHRoaXMuaWQsIHRoaXMuZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBSZW5kZXJlcjIsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFuaW1hdGVkQ2FyZENvbXBvbmVudCB9IGZyb20gJy4uL2FuaW1hdGVkLWNhcmQvYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBbmltYXRlZFN0YWNrU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuaW1hdGVkLXN0YWNrLnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIGFuaW1hdGVkIGNvbXBvbmVudCDDsMKfwpLCi8Owwp/CkMKxw6LCgMKNw7DCn8KQwonDsMKfwpHCosOwwp/CpcKfw7DCn8KUwqVcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneC1hbmltYXRlZC1zdGFjaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hbmltYXRlZC1zdGFjay5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW0FuaW1hdGVkU3RhY2tTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTdGFja0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oQW5pbWF0ZWRDYXJkQ29tcG9uZW50KSBjYXJkczogUXVlcnlMaXN0PEFuaW1hdGVkQ2FyZENvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzdGFja1NydjogQW5pbWF0ZWRTdGFja1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWZcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyB3aGVuIGEgY2FyZCBoYXMgYmVlbiBkZXN0cm95ZWQgd2UgZ2V0IGl0cyBpbmRleFxyXG4gICAgdGhpcy5zdGFja1Nydi5kZXN0cm95JC5zdWJzY3JpYmUoaWQgPT4ge1xyXG4gICAgICAvLyBnZXR0aW5nIHRoZSBub24gZGVsZXRlZCBlbGVtZW50c1xyXG4gICAgICBjb25zdCBjYXJkQXJyYXkgPSB0aGlzLmNhcmRzLm1hcChjYXJkID0+IGNhcmQpXHJcbiAgICAgICAgLmZpbHRlcihjYXJkID0+ICFjYXJkLmRlbGV0ZWQpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNhcmRBcnJheS5maW5kSW5kZXgoY2FyZCA9PiBjYXJkLmlkID09PSBpZCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyB3ZSBub3cgbmVlZCB0byBtb2RpZnkgbmV4dCBjYXJkXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGNhcmRBcnJheVtpXTtcclxuICAgICAgICBjb25zdCBsYXN0Q29vcmRzID0gY2FyZEFycmF5W2kgLSAxXS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb29yZHMgPSBjYXJkLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5hcHBseVRyYW5zbGF0aW9uKGNhcmQuZ2V0RWxlbWVudCgpLCBsYXN0Q29vcmRzLCBjdXJyZW50Q29vcmRzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gd2UgbmVlZCB0byByZXNldCB0aGUgdHJhbnNsYXRpb24gYWZ0ZXIgY2hhbmdlc1xyXG4gICAgdGhpcy5zdGFja1Nydi5kZXN0cm95ZWQkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcmRBcnJheSA9IHRoaXMuY2FyZHMubWFwKGNhcmQgPT4gY2FyZCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FyZEFycmF5LmZpbmRJbmRleChjYXJkID0+IGNhcmQuaWQgPT09IGlkKTtcclxuICAgICAgY29uc3QgZGVsZXRlZENhcmQgPSBjYXJkQXJyYXlbaW5kZXhdO1xyXG4gICAgICBjb25zdCBjYXJkRWxlbSA9IGRlbGV0ZWRDYXJkLmdldEVsZW1lbnQoKTtcclxuICAgICAgZGVsZXRlZENhcmQuZGVsZXRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2FyZEVsZW0sICdkaXNwbGF5JywgJ25vbmUnKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCBjYXJkQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyB3ZSByZXNldCBzdHlsZXNcclxuICAgICAgICBjb25zdCBuZXh0RWxlbSA9IGNhcmRBcnJheVtpXS5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuZXh0RWxlbSwgJ3RyYW5zZm9ybScsICdub25lJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShuZXh0RWxlbSwgJ3RyYW5zaXRpb24nLCAnbm9uZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFwcGx5VHJhbnNsYXRpb24oZWxlbSwgbGFzdENvb3JkcywgY3VycmVudENvb3Jkcykge1xyXG4gICAgY29uc3QgZHggPSBsYXN0Q29vcmRzLnggLSBjdXJyZW50Q29vcmRzLng7XHJcbiAgICBjb25zdCBkeSA9IGxhc3RDb29yZHMueSAtIGN1cnJlbnRDb29yZHMueTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbSwgJ3RyYW5zaXRpb24nLCAnMzAwbXMgdHJhbnNmb3JtJyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW0sICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtkeH1weCwgJHtkeX1weCwgMClgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5pbWF0ZWRTdGFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hbmltYXRlZC1zdGFjay9hbmltYXRlZC1zdGFjay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5pbWF0ZWRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FuaW1hdGVkLWNhcmQvYW5pbWF0ZWQtY2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5pbWF0ZWRTdGFja0NvbXBvbmVudCwgQW5pbWF0ZWRDYXJkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuaW1hdGVkU3RhY2tDb21wb25lbnQsIEFuaW1hdGVkQ2FyZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRDYXJkU3RhY2tNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiU3ViamVjdCIsIm9mIiwiZGVsYXkiLCJ0YXAiLCJJbmplY3RhYmxlIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiSW5wdXQiLCJDb250ZW50Q2hpbGRyZW4iLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBV0U7WUFMUSxjQUFTLEdBQUcsSUFBSUEsWUFBTyxFQUFVLENBQUM7WUFDMUMsYUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDakMsZ0JBQVcsR0FBRyxJQUFJQSxZQUFPLEVBQVUsQ0FBQztZQUM1QyxlQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUU1Qjs7Ozs7O1FBRWpCLHNDQUFPOzs7OztZQUFQLFVBQVEsRUFBVSxFQUFFLFNBQWlCO2dCQUFyQyxpQkFNQztnQkFMQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDeEIsT0FBT0MsT0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEJDLGVBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEJDLGFBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FDcEMsQ0FBQzthQUNIOztvQkFmRkMsZUFBVTs7OztRQWdCWCwyQkFBQztLQWhCRDs7Ozs7O0FDSkE7UUFnQkUsK0JBQ1UsUUFBOEIsRUFDOUIsT0FBbUIsRUFDbkIsUUFBbUI7WUFGbkIsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7WUFDOUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtZQUNuQixhQUFR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