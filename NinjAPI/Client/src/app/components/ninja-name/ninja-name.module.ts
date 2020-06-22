import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinjaNameComponent } from './ninja-name.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NinjaNameComponent],
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  exports: [NinjaNameComponent],
})
export class NinjaNameModule {}
