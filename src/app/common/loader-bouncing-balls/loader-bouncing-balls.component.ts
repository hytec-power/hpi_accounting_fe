import {Component, input} from '@angular/core';

@Component({
  selector: 'loader-bouncing-balls',
  imports: [],
  templateUrl: './loader-bouncing-balls.component.html',
  styleUrl: './loader-bouncing-balls.component.scss'
})
export class LoaderBouncingBallsComponent {
  size_px = input(40);
}
