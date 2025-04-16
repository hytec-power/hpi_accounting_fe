import {Component, computed, effect, input, model, signal} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'paginator',
  imports: [
    NgClass
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  currentPage = model<number>(1);
  itemCount = input.required<number>();
  pageSize = input.required<number>();
  pageCount = computed(()=> Math.ceil(this.itemCount()/this.pageSize()));
  pageList = computed(()=> this.getPages(this.currentPage()));
  lastPages = computed(()=> this.getLastPage(this.pageList()) );
  items: number =  5;
  constructor() {}
  ngOnInit(): void {}
  getPages(current: number): number[] {
    const pages: number[] = [];
    (current - 2) > 0 && pages.push(current-2);
    (current - 1) > 0 && pages.push(current-1);
    pages.push(current);
    const count = this.items - pages.length;
    for (let i = 1; i <= count; i++) {
      if(current+i > this.pageCount()) break;
      pages.push(current+i);
    }
    return pages;
  }
  getLastPage(pageList: number[]) {
    return [this.pageCount()-1,this.pageCount()].filter(p=> !pageList.includes(p));
  }
  next(){
    this.currentPage() < this.pageCount() && this.currentPage.update(x=>x+1);
  }
  back(){
    this.currentPage() > 1 && this.currentPage.update(x=>x-1);
  }

}
