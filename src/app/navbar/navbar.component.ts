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
		// toggle navbar
		$(document).ready(function(event){
			$('#navToggle').bind('click',function(event){
				$('#navbarNavAltMarkup').stop().slideToggle("slow");
			});

			$(window).resize(function(){  
				var w = $(window).width();  
				if(w > 768) {  
					$('#navbarNavAltMarkup').removeAttr('style');  
				}  
			});
		}); //and toggle navbar
	}
}