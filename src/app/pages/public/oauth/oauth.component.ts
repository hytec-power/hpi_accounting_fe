import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LoaderBouncingBallsComponent} from "src/app/common/loader-bouncing-balls/loader-bouncing-balls.component";

@Component({
  selector: 'app-oauth',
  imports: [
    LoaderBouncingBallsComponent
  ],
  templateUrl: './oauth.component.html',
  styleUrl: './oauth.component.scss'
})
export class OauthComponent {

  constructor(private ac: ActivatedRoute) {
  }

}
