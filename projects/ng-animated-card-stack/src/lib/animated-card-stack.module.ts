import { NgModule } from '@angular/core';
import { AnimatedCardComponent, AnimatedStackComponent } from './components';

@NgModule({
  imports: [],
  declarations: [AnimatedStackComponent, AnimatedCardComponent],
  exports: [AnimatedStackComponent, AnimatedCardComponent]
})
export class AnimatedCardStackModule { }
