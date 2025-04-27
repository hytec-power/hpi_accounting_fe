import {Component, viewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppStateService} from "src/app/services/app-state/app-state.service";
import {ThemeService} from "src/app/services/theme/theme.service";
import {ModalsComponent} from "src/app/common/modals/modals.component";
import {ModalsService} from "src/app/services/common/modals/modals.service";
import {ToastComponent} from "src/app/common/toast/toast.component";
import {ToastService} from "src/app/services/common/toast/toast.service";

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, ModalsComponent, ToastComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HPI Accounting';
  modals = viewChild.required('modals',{read: ModalsComponent});
  toast = viewChild.required<ToastComponent>('toast');


  constructor(private appState: AppStateService,
              private theme: ThemeService,
              private modalsApi: ModalsService,
              private toastApi: ToastService) {
  }
  ngOnInit() {
    this.modalsApi.bindComponent(this.modals());
    this.toastApi.bindComponent(this.toast());
  }
}
