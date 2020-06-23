import { Component, Input, Output, EventEmitter } from '@angular/core';

// Child component that displays the current list of buzzwords added by the user.
@Component({
  selector: 'app-buzzword-list',
  templateUrl: './buzzword-list.component.html',
})
export class BuzzwordListComponent {
  @Input()
  public buzzwords: string[];
  @Output()
  public buzzwordsChange = new EventEmitter<string[]>();

  // Removes the specified buzzword from the list and emits it to the parent component.
  public removeBuzzword(buzzword: string): void {
    this.buzzwords.splice(this.buzzwords.indexOf(buzzword), 1);
    this.buzzwordsChange.emit(this.buzzwords);
  }
}
