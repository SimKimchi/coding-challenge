import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KonamiCodeComponent } from './konami-code.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { KonamiCodeDirective } from 'src/app/directives/konami-code.directive';

@NgModule({
  declarations: [KonamiCodeComponent, KonamiCodeDirective],
  imports: [CommonModule, MatListModule, MatButtonModule],
  exports: [KonamiCodeComponent],
})
export class KonamiCodeModule {}
