import {Component, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {ThemeService} from "src/app/services/theme/theme.service";
import {ModalsComponent} from "src/app/common/modals/modals.component";
import {ModalsService} from "src/app/services/common/modals/modals.service";

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, ModalsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HPI Accounting';
  modals = viewChild.required('modals',{read: ModalsComponent});


  constructor(private appState: AppStateService,
              private theme: ThemeService,
              private modalsApi: ModalsService) {
  }
  ngOnInit() {
    this.modalsApi.bindComponent(this.modals());
  }
}
