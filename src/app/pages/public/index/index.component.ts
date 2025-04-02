import { Component } from '@angular/core';
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";
import {AuthService} from "src/app/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-index',
    imports: [
        LoaderBouncingBallsComponent
    ],
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private auth: AuthService,
              private router: Router) {}
  ngOnInit() {
    setTimeout(() => this.checkAuthState(),1000)
  }
  checkAuthState(){
     if(!this.auth.isAuthenticated()){
       this.router.navigate(['/login']);
     }
  }
}
