import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ninja } from 'src/models/ninja-model';

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
  public ninjaNameUrl = 'https://localhost:44348/ninjify';
  public isBuzzwordValid: boolean;
  public buzzwordInvalidMessage: string;
  public isNinjaNameValid: boolean;
  public ninjaErrorMessage: string;
  public addBtnMsg: string;

  constructor(private http: HttpClient) {
    this.updateAddBtnMsg();
  }

  public addBuzzword(): void {
    const buzzword: string = this.buzzwordInput.value;

    if (!buzzword || this.buzzwords.find((x) => x === buzzword)) {
      this.isBuzzwordValid = false;
      this.buzzwordInvalidMessage = 'Buzzword is invalid!';

      return;
    }

    this.isBuzzwordValid = true;
    this.buzzwords.push(buzzword);
    this.updateAddBtnMsg();
    this.buzzwordInput.setValue('');
  }

  public removeBuzzword(buzzword: string): void {
    this.buzzwords.splice(this.buzzwords.indexOf(buzzword), 1);
    this.updateAddBtnMsg();
  }

  public getNinjaName(): void {
    const flatBuzzwordList = encodeURIComponent(
      this.buzzwords.join(',').toLowerCase()
    );

    this.http
      .get<Ninja>(`${this.ninjaNameUrl}?x=${flatBuzzwordList}`, {
        responseType: 'json',
      })
      .subscribe(
        (data) => {
          this.isNinjaNameValid = true;
          this.ninjaName = data.name;
        },
        (error) => {
          this.isNinjaNameValid = false;
          this.ninjaErrorMessage = error.error.errorMessage;
        }
      );

    this.wordsSubmitted = true;
  }

  public updateAddBtnMsg() {
    const buzzwordsCount = this.buzzwords.length;
    if (buzzwordsCount === 0) {
      this.addBtnMsg = 'Add';
    } else if (buzzwordsCount < 5) {
      this.addBtnMsg = 'One more!';
    } else if (buzzwordsCount < 10) {
      this.addBtnMsg = 'Ok ok.';
    } else {
      this.addBtnMsg = 'Not sure if the shogun will pronounce all that...';
    }
  }
}
