import { Component, Input } from '@angular/core';
import { NinjaNameService } from './ninja-name.service';

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

  constructor(private ninjaNameService: NinjaNameService) {}

  public submitBuzzwords(): void {
    const flatBuzzwordList = encodeURIComponent(
      this.buzzwords.join(',').toLowerCase()
    );

    this.ninjaNameService.getNinjaName(flatBuzzwordList).subscribe(
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
