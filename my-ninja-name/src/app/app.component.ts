import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  @Input()
  public newBuzzword = 'allo';
  @Output()
  public newBuzzwordChange = new EventEmitter<string>();
  public buzzwords: string[] = [];
  public ninjaName: string;

  constructor(private http: HttpClient) {}

  public addBuzzword(buzzword: string): void {
    if (!buzzword || this.buzzwords.find((x) => x === buzzword)) {
      return;
    }
    // TODO: Verify that the word is a buzzword.
    this.buzzwords.push(buzzword);

    this.newBuzzword = '';
    this.newBuzzwordChange.emit(this.newBuzzword);
  }

  public removeBuzzword(buzzword: string): void {
    this.buzzwords.splice(this.buzzwords.indexOf(buzzword), 1);
  }

  public getNinjaName(): void {
    const flatBuzzwordList = this.buzzwords.join(',').toLowerCase();
    console.log(flatBuzzwordList);

    // this.http.get(this.ninjaNameUrl);
    this.ninjaName = 'Sekiro';
  }
}
