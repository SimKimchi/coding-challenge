import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { duplicateBuzzwordValidator } from 'src/app/validators/duplicate-buzzword.validator';

@Component({
  selector: 'app-new-buzzword',
  templateUrl: './new-buzzword.component.html',
})
export class NewBuzzwordComponent implements OnInit {
  @Input()
  public buzzwords: string[] = [];
  @Output()
  public buzzwordsChange = new EventEmitter<string[]>();
  @Input()
  public addBtnMsg: string;
  public buzzwordInput: FormControl;

  ngOnInit(): void {
    this.buzzwordInput = new FormControl('', [
      Validators.required,
      duplicateBuzzwordValidator(this.buzzwords),
    ]);
  }

  public addBuzzword(): void {
    const buzzword: string = this.buzzwordInput.value;

    if (
      this.buzzwordInput.invalid ||
      this.buzzwords.find((x) => x === buzzword)
    ) {
      return;
    }

    this.buzzwords.push(buzzword);
    this.buzzwordsChange.emit(this.buzzwords);
    this.buzzwordInput.reset();
  }
}
