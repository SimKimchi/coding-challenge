import { Component, Input } from '@angular/core';
import { NinjaNameService } from './ninja-name.service';

// Child component that sends the buzzword list to the Web API and displays the ninja name.
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

  // Sends the buzzwords to the API and displays the returned ninja name.
  public submitBuzzwords(): void {
    const flatBuzzwordList = this.makeURIFriendlyList();

    this.ninjaNameService.getNinjaName(flatBuzzwordList).subscribe(
      (data) => {
        this.isNinjaNameValid = true;
        this.ninjaName = data.name;
      },
      (error) => {
        this.isNinjaNameValid = false;
        this.ninjaName = null;
        this.ninjaErrorMessage = error.error;
      }
    );

    this.wordsSubmitted = true;
  }

  // Transforms an array of strings into a single comma-separated list string.
  private makeURIFriendlyList(): string {
    return encodeURIComponent(this.buzzwords.join(',').toLowerCase());
  }
}
