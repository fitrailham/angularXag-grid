import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  showFiller = false;
  name = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  onClickLeft() {
    // this.slidesContainer.nativeElement.scrollLeft -= this.currentItem.nativeElement.offsetWidth;
    
    // if (this.slidesIndex > 0) {
    //   this.slidesIndex--;
    // } 
  }

  onClickRight() {
    // this.slidesContainer.nativeElement.scrollLeft += this.currentItem.nativeElement.offsetWidth;

    // if (this.slidesIndex < this.items.length - 1) {
    //   this.slidesIndex++
    // }
  }

}
