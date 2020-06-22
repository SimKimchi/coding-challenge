import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BuzzwordListModule } from './components/buzzword-list/buzzword-list.module';
import { NinjaNameModule } from './components/ninja-name/ninja-name.module';
import { NewBuzzwordModule } from './components/new-buzzword/new-buzzword.module';
import { KonamiCodeModule } from './components/konami-code/konami-code.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BuzzwordListModule,
    NinjaNameModule,
    NewBuzzwordModule,
    KonamiCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
