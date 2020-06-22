import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buzzword-list',
  templateUrl: './buzzword-list.component.html',
})
export class BuzzwordListComponent {
  @Input()
  public buzzwords: string[];
  @Output()
  public buzzwordsChange = new EventEmitter<string[]>();

  public removeBuzzword(buzzword: string): void {
    this.buzzwords.splice(this.buzzwords.indexOf(buzzword), 1);
    this.buzzwordsChange.emit(this.buzzwords);
  }
}
