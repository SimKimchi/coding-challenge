import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-buzzword',
  templateUrl: './new-buzzword.component.html',
})
export class NewBuzzwordComponent {
  @Input()
  buzzwords: string[];
  @Output()
  public buzzwordsChange = new EventEmitter<string[]>();
  @Input()
  public addBtnMsg: string;
  public buzzwordInput = new FormControl();
  public isBuzzwordValid: boolean;
  public buzzwordInvalidMessage: string;

  public addBuzzword(): void {
    const buzzword: string = this.buzzwordInput.value;

    if (!buzzword || this.buzzwords.find((x) => x === buzzword)) {
      this.isBuzzwordValid = false;
      this.buzzwordInvalidMessage = 'Buzzword is invalid!';

      return;
    }

    this.isBuzzwordValid = true;
    this.buzzwords.push(buzzword);
    this.buzzwordsChange.emit(this.buzzwords);
    this.buzzwordInput.setValue('');
  }
}
