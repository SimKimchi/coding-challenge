import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NinjaNameComponent } from './ninja-name.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { NinjaNameService } from './ninja-name.service';

@NgModule({
  declarations: [NinjaNameComponent],
  imports: [CommonModule, MatButtonModule, HttpClientModule],
  exports: [NinjaNameComponent],
  providers: [NinjaNameService],
})
export class NinjaNameModule {}
