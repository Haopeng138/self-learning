import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title: string;
  dropdown = false;
  
  @ViewChild('productbtn', {read: ElementRef}) productbtn: ElementRef | undefined;
  constructor() { }

  
  ngOnInit() {}
  hideDropdown(event: any) {
    const xTouch = (event.clientX).toFixed(2);
    const yTouch = (event.clientY).toFixed(2);

    const rect = this.productbtn?.nativeElement.getBoundingClientRect();

    const topBoundary = (rect.top+2).toFixed(2);
    const leftBoundary = (rect.left+2).toFixed(2);
    const rightBoundary = (rect.right-2).toFixed(2);

    if ( xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }
}
