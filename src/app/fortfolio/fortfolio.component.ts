import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-fortfolio',
  templateUrl: './fortfolio.component.html',
  styleUrls: ['./fortfolio.component.scss']
})
export class FortfolioComponent implements OnInit {
  show = false;

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".item-fortfolio").hover(function(){
        $("#img").AddClass("display-hover")
      })
    });

  }

  modul(){
    this.show = true
  }
}
