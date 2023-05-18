import { Component, DoCheck, ElementRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-product-board',
  templateUrl: './product-board.component.html',
  styleUrls: ['./product-board.component.scss']
})
export class ProductBoardComponent implements DoCheck {

  public constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  public blink(): void {
    this.el.nativeElement.classList.add('highlight');
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }

  public ngDoCheck(): void {
    console.log("ProductBoardComponent")
  }
}
