export declare class AnimatedStackService {
    private _destroy$;
    destroy$: import("rxjs/internal/Observable").Observable<string>;
    private _destroyed$;
    destroyed$: import("rxjs/internal/Observable").Observable<string>;
    constructor();
    destroy(id: string, delayTime: number): import("rxjs/internal/Observable").Observable<string>;
}
