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

// lightbox

var box = document.querySelectorAll('.content-box');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function(e){
        var boxElem = e.currentTarget.getAttribute('src');
        lightBox(boxElem);
    })
}

var ligBox = document.querySelector('.box');
var elem = document.querySelector('.image-box');

function lightBox(box) {
    ligBox.classList.add('active');   
    elem.setAttribute("src", box);
}

ligBox.addEventListener('click', function(e){
    var close = document.querySelector('.close');
    if (ligBox == e.target || close == e.target) {
        ligBox.classList.remove('active');
    }
})





















