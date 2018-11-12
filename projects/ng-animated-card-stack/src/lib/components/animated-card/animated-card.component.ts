import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { AnimatedStackService } from '../../services/animated-stack.service';


@Component({
  selector: 'x-animated-card',
  templateUrl: './animated-card.component.html',
  styleUrls: ['./animated-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedCardComponent implements AfterViewInit {
  /** index of the item in the list */
  @Input() id: string;
  delay = 400;
  deleted: boolean;

  constructor(
    private stackSrv: AnimatedStackService,
    private elemRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.elemRef.nativeElement, 'transition', `${this.delay}ms transform`);
  }

  destroy() {
    this.renderer.setStyle(this.elemRef.nativeElement, 'visibility', 'hidden');
    return this.stackSrv.destroy(this.id, this.delay);
  }

  getPosition() {
    return (this.elemRef.nativeElement as HTMLElement).getBoundingClientRect();
  }

  getElement() {
    return this.elemRef.nativeElement;
  }

}
