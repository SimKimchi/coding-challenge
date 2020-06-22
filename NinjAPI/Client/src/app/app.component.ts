import { Component } from '@angular/core';

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
