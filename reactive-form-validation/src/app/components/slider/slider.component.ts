import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  itemlist:any;
  constructor(config: NgbCarouselConfig) { 
     // customize default values of carousels used by this component tree
     config.interval = 10000;
     config.wrap = false;
     config.keyboard = false;

     this.itemlist=[
      {imgUrl:'assets/images/1.jpg'},
      {imgUrl:'assets/images/2.jpg'},
      {imgUrl:'assets/images/3.jpg'}
    ]

    
  }
  ngOnInit() {
  }

}
/* 
$("document").ready(()=> {
    alert("working");
});
 */