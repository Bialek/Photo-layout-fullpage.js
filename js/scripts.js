$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Photo App', 'Design', 'Community', 'Subscibe', 'Download'],
		responsiveWidth: 769,
		afterResponsive: function(isResponsive){
			
		}

	});
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,

	});
});


$(function(){
		var slideIndex = 1,
			section3 = 1,
			section2 = 1,
			sliderCount = $('#textSlider ul').find('li').toArray().length,
			numberSlide = 1;

		for (var i = 0; i != 2; i++) {
			if (i == 1) {
				x = $('.gallery');
				showDivs(slideIndex);
			} else {
				x = $('#textSlider ul li');
				showDivs(slideIndex);

			}
			
		}

	function plusDivs(n) {
		showDivs(slideIndex += n);
	}

	function showDivs(n) {
		var i = 0;
		if (n > x.length) {slideIndex = 1}
		if (n < 1) {slideIndex = x.length};
		for (i = 0; i < x.length; i++) {
		 x[i].style.display = 'none';  
		}
		x[slideIndex-1].style.display = 'block';  
	}

	function slideNumber() {
		if (numberSlide > sliderCount) {
			numberSlide = 1;
		} 
		if (numberSlide < 1) {
			numberSlide = sliderCount;
		}
		if (numberSlide > 10) {
			$('#control h2').text(numberSlide+ '/'+sliderCount);
		} else {
			$('#control h2').text('0' +numberSlide+ '/0'+sliderCount);	
		}
		
		
	}

	function test(x) {

		if (x > sliderCount) {
			return x = 1;
		} else if (x < 1) {
			return x = sliderCount;
		} else {
			return x;
		}
	}


	$('#section3 #left2').click(function(){
		slideIndex = section3;
		x = $('.gallery')
		plusDivs(-1);
		section3--;
		section3 = test(section3);
	})

	$('#section3 #right2').click(function(){
		slideIndex = section3;
		x = $('.gallery')
		plusDivs(1);
		section3++;
		section3 = test(section3);
	})
	$('#section2 #left1').click(function(){
		slideIndex = section2;
		x = $('#textSlider ul li')
		numberSlide--;
		plusDivs(-1);	
		slideNumber();
		section2--;
		section2 = test(section2);
	})

	$('#section2 #right1').click(function(){
		slideIndex = section2;
		x = $('#textSlider ul li')
		numberSlide++;
		plusDivs(1);		
		slideNumber();
		section2++;
		section2 = test(section2);
	})
})

$(function(){

	$('#logo, #logoM').on({
	'mouseover': function() {
	    this.src = 'images/logo2.png';
	  },
	  'mouseout' : function() {
	    this.src='images/logo.png';
	  }
	});
})