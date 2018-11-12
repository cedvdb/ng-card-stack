import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  Renderer2,
} from '@angular/core';
import { AnimatedCardComponent } from '../animated-card/animated-card.component';
import { AnimatedStackService } from '../../services/animated-stack.service';

/**
 * animated component 💋🐱‍🐉👢🥟🔥
 */
@Component({
  selector: 'x-animated-stack',
  templateUrl: './animated-stack.component.html',
  styleUrls: ['./animated-stack.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AnimatedStackService]
})
export class AnimatedStackComponent implements AfterViewInit {
  @ContentChildren(AnimatedCardComponent) cards: QueryList<AnimatedCardComponent>;

  constructor(
    private stackSrv: AnimatedStackService,
    private renderer: Renderer2,
    private elemRef: ElementRef
  ) { }

  ngAfterViewInit() {
    // when a card has been destroyed we get its index
    this.stackSrv.destroy$.subscribe(id => {
      // getting the non deleted elements
      const cardArray = this.cards.map(card => card)
        .filter(card => !card.deleted);
      const index = cardArray.findIndex(card => card.id === id);
      for (let i = index + 1; i < cardArray.length; i++) {
        // we now need to modify next card
        const card = cardArray[i];
        const lastCoords = cardArray[i - 1].getPosition();
        const currentCoords = card.getPosition();
        this.applyTranslation(card.getElement(), lastCoords, currentCoords);
      }
    });

    // we need to reset the translation after changes
    this.stackSrv.destroyed$.subscribe(id => {
      const cardArray = this.cards.map(card => card);
      const index = cardArray.findIndex(card => card.id === id);
      const deletedCard = cardArray[index];
      const cardElem = deletedCard.getElement();
      deletedCard.deleted = true;
      this.renderer.setStyle(cardElem, 'display', 'none');

      for (let i = index + 1; i < cardArray.length; i++) {
        // we reset styles
        const nextElem = cardArray[i].getElement();
        this.renderer.setStyle(nextElem, 'transform', 'none');
        this.renderer.setStyle(nextElem, 'transition', 'none');
      }
    });
  }

  applyTranslation(elem, lastCoords, currentCoords) {
    const dx = lastCoords.x - currentCoords.x;
    const dy = lastCoords.y - currentCoords.y;
    this.renderer.setStyle(elem, 'transition', '300ms transform');
    this.renderer.setStyle(elem, 'transform', `translate3d(${dx}px, ${dy}px, 0)`);
  }

}

