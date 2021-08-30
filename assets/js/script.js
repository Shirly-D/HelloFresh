// slider

var slider = document.querySelector('.slider');

if (slider) {
		$('.slider').slick({    
			dots: true,
            arrows:true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            slidesToShow: 3,
            slidesToScroll: 1
		});
}






















