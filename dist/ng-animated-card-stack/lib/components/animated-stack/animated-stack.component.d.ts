import { AfterViewInit, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { AnimatedCardComponent } from '../animated-card/animated-card.component';
import { AnimatedStackService } from '../../services/animated-stack.service';
/**
 * animated component 💋🐱‍🐉👢🥟🔥
 */
export declare class AnimatedStackComponent implements AfterViewInit {
    private stackSrv;
    private renderer;
    private elemRef;
    cards: QueryList<AnimatedCardComponent>;
    constructor(stackSrv: AnimatedStackService, renderer: Renderer2, elemRef: ElementRef);
    ngAfterViewInit(): void;
    applyTranslation(elem: any, lastCoords: any, currentCoords: any): void;
}
