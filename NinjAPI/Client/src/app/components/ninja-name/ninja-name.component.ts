import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ninja } from 'src/models/ninja-model';

@Component({
  selector: 'app-ninja-name',
  templateUrl: './ninja-name.component.html',
})
export class NinjaNameComponent {
  @Input()
  public buzzwords: string[];
  public wordsSubmitted: boolean;
  public isNinjaNameValid: boolean;
  public ninjaName: string;
  public ninjaErrorMessage: string;

  constructor(private http: HttpClient) {}

  public getNinjaName(): void {
    const flatBuzzwordList = encodeURIComponent(
      this.buzzwords.join(',').toLowerCase()
    );

    this.http
      .get<Ninja>(`${document.location.href}ninjify?x=${flatBuzzwordList}`, {
        responseType: 'json',
      })
      .subscribe(
        (data) => {
          this.isNinjaNameValid = true;
          this.ninjaName = data.name;
        },
        (error) => {
          this.isNinjaNameValid = false;
          this.ninjaErrorMessage = error.error;
        }
      );

    this.wordsSubmitted = true;
  }
}
