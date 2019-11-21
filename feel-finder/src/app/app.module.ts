import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { FeelFinderComponent } from './feel-finder/feel-finder.component';
import { FeelingComponent } from './feeling/feeling.component';

@NgModule({
  declarations: [
    FeelFinderComponent,
    FeelingComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [FeelFinderComponent],
  bootstrap: [FeelFinderComponent]
})
export class AppModule {

  constructor(injector: Injector) {
    const feelfinder = createCustomElement(FeelFinderComponent, { injector });
    customElements.define('feel-finder', feelfinder);
  }

  ngDoBootStrap() { };

}
