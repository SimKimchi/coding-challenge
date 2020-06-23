import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { duplicateBuzzwordValidator } from 'src/app/validators/duplicate-buzzword.validator';

// Child component that lets users add a new buzzword to the list.
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

  // If valid, adds the new buzzword to the list and emits it to the parent component.
  public addBuzzword(): void {
    const buzzword: string = this.buzzwordInput.value;

    if (this.buzzwordInput.invalid) {
      return;
    }

    this.buzzwords.push(buzzword);
    this.buzzwordsChange.emit(this.buzzwords);
    this.buzzwordInput.reset();
  }
}
