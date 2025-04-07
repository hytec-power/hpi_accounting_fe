import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {ThemeService} from "src/app/services/theme/theme.service";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hpi_accounting_fe';
  constructor(private appState: AppStateService,
              private theme: ThemeService) {
  }
}
