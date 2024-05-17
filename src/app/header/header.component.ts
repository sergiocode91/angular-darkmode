import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../services/darkmode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  _darkModeService: DarkmodeService = inject(DarkmodeService);

  toggleDarkmode() {
    this._darkModeService.toggleDarkmode();
  }
}
