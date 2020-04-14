import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  constructor() {
   }

  ngAfterViewInit() {
    $(document).ready(function(event){
		$('#navToggle').bind('click',function(event){
			$('#navbarNavAltMarkup').slideToggle("slow");
		});

		$(window).resize(function(){  
			var w = $(window).width();  
			if(w > 768) {  
				$('#navbarNavAltMarkup').removeAttr('style');  
			}  
		});
    });
  }
}
