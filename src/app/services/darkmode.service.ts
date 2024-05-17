import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  public darkmode = signal<string>('light');

  public toggleDarkmode() {
    this.darkmode.update((value) => value === 'light' ? 'dark' : 'light');
  }

  constructor() { }
}
