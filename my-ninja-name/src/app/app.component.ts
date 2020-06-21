import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public ninjaName: string;
  public buzzwordInput = new FormControl();
  public buzzwords: string[] = [];
  public wordsSubmitted = false;

  constructor(private http: HttpClient) {}

  public addBuzzword(): void {
    const buzzword: string = this.buzzwordInput.value;

    if (!buzzword || this.buzzwords.find((x) => x === buzzword)) {
      return;
    }
    // TODO: Verify that the word is a buzzword.
    this.buzzwords.push(buzzword);

    this.buzzwordInput.setValue('');
  }

  public removeBuzzword(buzzword: string): void {
    this.buzzwords.splice(this.buzzwords.indexOf(buzzword), 1);
  }

  public getNinjaName(): void {
    const flatBuzzwordList = this.buzzwords.join(',').toLowerCase();

    // this.http.get(this.ninjaNameUrl);
    this.ninjaName = flatBuzzwordList;
    this.wordsSubmitted = true;
  }
}
