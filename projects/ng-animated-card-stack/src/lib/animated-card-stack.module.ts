import { NgModule } from '@angular/core';
import { AnimatedStackComponent } from './components/animated-stack/animated-stack.component';
import { AnimatedCardComponent } from './components/animated-card/animated-card.component';

@NgModule({
  imports: [],
  declarations: [AnimatedStackComponent, AnimatedCardComponent],
  exports: [AnimatedStackComponent, AnimatedCardComponent]
})
export class AnimatedCardStackModule { }
