import { Component } from '@angular/core';

@Component({
  selector: 'app-konami-code',
  templateUrl: './konami-code.component.html',
})
export class KonamiCodeComponent {
  public isKonamiEntered = false;

  public handleKonami() {
    this.isKonamiEntered = true;
  }
}
