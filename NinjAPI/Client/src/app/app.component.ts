import { Component } from '@angular/core';

// Parent component of the app.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public buzzwords: string[] = [];
  public addBtnMsg: string;

  public constructor() {
    this.updateAddBtnMsg();
  }

  // Changes the "Add" button message based on the amount of buzzwords in the list.
  public updateAddBtnMsg() {
    const buzzwordsCount = this.buzzwords.length;
    if (buzzwordsCount === 0) {
      this.addBtnMsg = 'Add';
    } else if (buzzwordsCount < 5) {
      this.addBtnMsg = 'One more!';
    } else if (buzzwordsCount < 10) {
      this.addBtnMsg = 'Ok ok.';
    } else {
      this.addBtnMsg = 'Uh oh...';
    }
  }
}
