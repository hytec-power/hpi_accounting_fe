import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'common-header',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('user_container',{ static: true}) user_container !: ElementRef;

  test(){
    console.log('wee');
    this.user_container.nativeElement.blur();
  }
}
