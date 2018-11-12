import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { AnimatedStackService } from '../../services/animated-stack.service';
export declare class AnimatedCardComponent implements AfterViewInit {
    private stackSrv;
    private elemRef;
    private renderer;
    /** index of the item in the list */
    id: string;
    delay: number;
    deleted: boolean;
    constructor(stackSrv: AnimatedStackService, elemRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    destroy(): import("rxjs/internal/Observable").Observable<string>;
    getPosition(): DOMRect | ClientRect;
    getElement(): any;
}
