# AnimatedCardStackLib

Animated card stack for deleting items present in a list and reorder them gracefully

check demo at https://cedvdb.github.io/ng-card-stack/

## Installation

`npm i ng-animated-card-stack`


## Usage
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimatedCardStackModule } from 'ng-animated-card-stack';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimatedCardStackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

and

```
<x-animated-stack>
  <x-animated-card
    #animatedCard
    [id]="card.id"
    *ngFor="let card of cards"
    (click)="animatedCard.destroy().subscribe()">
    <div class="card">{{ card.id }}</div>
  </x-animated-card>
</x-animated-stack>
```