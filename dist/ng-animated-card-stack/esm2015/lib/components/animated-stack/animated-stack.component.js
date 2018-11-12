/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, QueryList, Renderer2, } from '@angular/core';
import { AnimatedCardComponent } from '../animated-card/animated-card.component';
import { AnimatedStackService } from '../../services/animated-stack.service';
/**
 * animated component 💋🐱‍🐉👢🥟🔥
 */
export class AnimatedStackComponent {
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
if (false) {
    /** @type {?} */
    AnimatedStackComponent.prototype.cards;
    /** @type {?} */
    AnimatedStackComponent.prototype.stackSrv;
    /** @type {?} */
    AnimatedStackComponent.prototype.renderer;
    /** @type {?} */
    AnimatedStackComponent.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0ZWQtc3RhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYW5pbWF0ZWQtY2FyZC1zdGFjay8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2FuaW1hdGVkLXN0YWNrL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7O0FBWTdFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7OztJQUdqQyxZQUNVLFFBQThCLEVBQzlCLFFBQW1CLEVBQ25CLE9BQW1CO1FBRm5CLGFBQVEsR0FBUixRQUFRLENBQXNCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUN6QixDQUFDOzs7O0lBRUwsZUFBZTtRQUNiLGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7OztrQkFFOUIsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7O2tCQUMxQixLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3pELEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7O3NCQUUzQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQzs7c0JBQ25CLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTs7c0JBQzNDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNyRTtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTs7a0JBQ2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs7a0JBQ3hDLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7O2tCQUNuRCxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzs7a0JBQzlCLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3pDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzs7c0JBRTNDLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxhQUFhOztjQUN4QyxFQUFFLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQzs7Y0FDbkMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGdFQUE4QztnQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDOzthQUNsQzs7OztZQVhRLG9CQUFvQjtZQUgzQixTQUFTO1lBRlQsVUFBVTs7O29CQWtCVCxlQUFlLFNBQUMscUJBQXFCOzs7O0lBQXRDLHVDQUFnRjs7SUFHOUUsMENBQXNDOztJQUN0QywwQ0FBMkI7O0lBQzNCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5pbWF0ZWRDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vYW5pbWF0ZWQtY2FyZC9hbmltYXRlZC1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFuaW1hdGVkU3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0ZWQtc3RhY2suc2VydmljZSc7XHJcblxyXG4vKipcclxuICogYW5pbWF0ZWQgY29tcG9uZW50IPCfkovwn5Cx4oCN8J+QifCfkaLwn6Wf8J+UpVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd4LWFuaW1hdGVkLXN0YWNrJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYW5pbWF0ZWQtc3RhY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FuaW1hdGVkLXN0YWNrLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbQW5pbWF0ZWRTdGFja1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFN0YWNrQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihBbmltYXRlZENhcmRDb21wb25lbnQpIGNhcmRzOiBRdWVyeUxpc3Q8QW5pbWF0ZWRDYXJkQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHN0YWNrU3J2OiBBbmltYXRlZFN0YWNrU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZlxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIHdoZW4gYSBjYXJkIGhhcyBiZWVuIGRlc3Ryb3llZCB3ZSBnZXQgaXRzIGluZGV4XHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3kkLnN1YnNjcmliZShpZCA9PiB7XHJcbiAgICAgIC8vIGdldHRpbmcgdGhlIG5vbiBkZWxldGVkIGVsZW1lbnRzXHJcbiAgICAgIGNvbnN0IGNhcmRBcnJheSA9IHRoaXMuY2FyZHMubWFwKGNhcmQgPT4gY2FyZClcclxuICAgICAgICAuZmlsdGVyKGNhcmQgPT4gIWNhcmQuZGVsZXRlZCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FyZEFycmF5LmZpbmRJbmRleChjYXJkID0+IGNhcmQuaWQgPT09IGlkKTtcclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIG5vdyBuZWVkIHRvIG1vZGlmeSBuZXh0IGNhcmRcclxuICAgICAgICBjb25zdCBjYXJkID0gY2FyZEFycmF5W2ldO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDb29yZHMgPSBjYXJkQXJyYXlbaSAtIDFdLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvb3JkcyA9IGNhcmQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNsYXRpb24oY2FyZC5nZXRFbGVtZW50KCksIGxhc3RDb29yZHMsIGN1cnJlbnRDb29yZHMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0cmFuc2xhdGlvbiBhZnRlciBjaGFuZ2VzXHJcbiAgICB0aGlzLnN0YWNrU3J2LmRlc3Ryb3llZCQuc3Vic2NyaWJlKGlkID0+IHtcclxuICAgICAgY29uc3QgY2FyZEFycmF5ID0gdGhpcy5jYXJkcy5tYXAoY2FyZCA9PiBjYXJkKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBjYXJkQXJyYXkuZmluZEluZGV4KGNhcmQgPT4gY2FyZC5pZCA9PT0gaWQpO1xyXG4gICAgICBjb25zdCBkZWxldGVkQ2FyZCA9IGNhcmRBcnJheVtpbmRleF07XHJcbiAgICAgIGNvbnN0IGNhcmRFbGVtID0gZGVsZXRlZENhcmQuZ2V0RWxlbWVudCgpO1xyXG4gICAgICBkZWxldGVkQ2FyZC5kZWxldGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjYXJkRWxlbSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IGluZGV4ICsgMTsgaSA8IGNhcmRBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHdlIHJlc2V0IHN0eWxlc1xyXG4gICAgICAgIGNvbnN0IG5leHRFbGVtID0gY2FyZEFycmF5W2ldLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNmb3JtJywgJ25vbmUnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5leHRFbGVtLCAndHJhbnNpdGlvbicsICdub25lJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXBwbHlUcmFuc2xhdGlvbihlbGVtLCBsYXN0Q29vcmRzLCBjdXJyZW50Q29vcmRzKSB7XHJcbiAgICBjb25zdCBkeCA9IGxhc3RDb29yZHMueCAtIGN1cnJlbnRDb29yZHMueDtcclxuICAgIGNvbnN0IGR5ID0gbGFzdENvb3Jkcy55IC0gY3VycmVudENvb3Jkcy55O1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtLCAndHJhbnNpdGlvbicsICczMDBtcyB0cmFuc2Zvcm0nKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbSwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUzZCgke2R4fXB4LCAke2R5fXB4LCAwKWApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==