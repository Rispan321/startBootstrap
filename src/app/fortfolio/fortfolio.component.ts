import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-fortfolio',
  templateUrl: './fortfolio.component.html',
  styleUrls: ['./fortfolio.component.scss']
})
export class FortfolioComponent implements AfterViewInit {
	selectedItem: any = null;
	dataModal = [
		{
			title : 'LOG CABIN',
			img : '../../assets/image/img-fortfolio1.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		},
		{
			title : 'TASTY CAKE',
			img : '../../assets/image/img-fortfolio2.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		},
		{
			title : 'CIRCUS TENT',
			img : '../../assets/image/img-fortfolio3.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		},
		{
			title : 'CONTROLLER',
			img : '../../assets/image/img-fortfolio4.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		},
		{
			title : 'LOCKED SAFE',
			img : '../../assets/image/img-fortfolio5.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		},
		{
			title : 'SUBMARINE',
			img : '../../assets/image/img-fortfolio6.png',
			textModal : 'Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.',
		}
		
	];
	
	constructor() { }

	ngAfterViewInit() {
		// hover img modal
		$('.img').hover(function(){
			$(this).children('.display-hover').toggleClass('display-block')
		});

	}

	// modal show
	modalShow(a){
		$('#portfolio-modal').modal('show');
	}

	// modal hide
	modalHide(){
		$('#portfolio-modal').modal('hide');
	}

	selectItem(e){
		$('#portfolio-modal').modal('show');
		this.selectedItem = e;
	}
	
}
