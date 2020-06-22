import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzzwordListComponent } from './buzzword-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BuzzwordListComponent],
  imports: [CommonModule, MatListModule, MatButtonModule],
  exports: [BuzzwordListComponent],
})
export class BuzzwordListModule {}
