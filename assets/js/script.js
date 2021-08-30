// slider

var slider = document.querySelector('.slider');

if (slider) {
		$('.slider').slick({    
			dots: true,
            autoplay:true,
            arrows:true,
            prevArrow: '<button class="slide-arrow prev-arrow slick-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow slick-arrow"></button>',
            slidesToShow: 3,
            slidesToScroll: 1
		});
}






















