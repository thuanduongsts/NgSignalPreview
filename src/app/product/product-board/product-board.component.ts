import { Component, DoCheck, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-board',
  templateUrl: './product-board.component.html',
  styleUrls: ['./product-board.component.scss']
})
export class ProductBoardComponent implements DoCheck {

  public constructor(
    private el: ElementRef
  ) { }

  public blink(): void {
    this.el.nativeElement.classList.add('highlight');
    setTimeout(() => {
      this.el.nativeElement.classList.remove('highlight');
    }, 1500);
  }

  public ngDoCheck(): void {
    console.log("ProductBoardComponent")
  }
}
