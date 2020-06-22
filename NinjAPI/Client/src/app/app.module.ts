import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BuzzwordListModule } from './components/buzzword-list/buzzword-list.module';
import { NinjaNameModule } from './components/ninja-name/ninja-name.module';
import { NewBuzzwordModule } from './components/new-buzzword/new-buzzword.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BuzzwordListModule,
    NinjaNameModule,
    NewBuzzwordModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
