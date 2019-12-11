import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FeelFinderComponent } from './feel-finder/feel-finder.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { FeelingCardComponent } from './feeling-card/feeling-card.component';
import { DiaryComponent } from './diary/diary.component';

@NgModule({
  declarations: [
    FeelFinderComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FeelingCardComponent,
    DiaryComponent,
  ],
  imports: [
    BrowserModule,
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

  ngDoBootStrap() { }

}
