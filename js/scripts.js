$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Photo App', 'Design', 'Community', 'Subscibe', 'Download'],
		responsiveWidth: 786,
		afterResponsive: function(isResponsive){
			
		}

	});
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: false,

	});
});


$(function(){
	var list = $('#textSlider ul'),
		sliderCount = list.find('li').toArray().length,
		numberSlide = 1;

	slideNumber();

		


	$('#section2 #right1').click(function(){
		list.animate({"marginLeft":-400}, 500, function(){
			var firstItem = list.find('li:first'),
				lastItem = list.find('li:last');
			lastItem.after(firstItem);
			list.css({marginLeft:0});
		});
		numberSlide++;
		slideNumber();
	});

	$('#section2 #left1').click(function(){
		list.animate({"marginLeft":400}, 500, function(){
			for (var i = 0; i < (sliderCount-1); i++){

				var firstItem = list.find('li:first'),
				lastItem = list.find('li:last');
				lastItem.after(firstItem);
				list.css({marginLeft:0});
			}
			
		});
		numberSlide--;
		slideNumber();
	});
	function slideNumber() {
		if (numberSlide > sliderCount) {
			numberSlide = 1;
		} 
		if (numberSlide < 1) {
			numberSlide = 5;
		} 
		$('#control h2').text('0' +numberSlide+ '/0'+sliderCount);
		
	}
	
});

$(function(){
		var slideIndex = 1;
		showDivs(slideIndex);

	function plusDivs(n) {
		showDivs(slideIndex += n);
	}

	function showDivs(n) {
		var i;
		var x = $(".gallery");
		if (n > x.length) {slideIndex = 1}
		if (n < 1) {slideIndex = x.length};
		for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
		}
		x[slideIndex-1].style.display = "block";  
	}

	$('#section3 #left2').click(function(){
		plusDivs(-1);
	})

	$('#section3 #right2').click(function(){
		plusDivs(1);
	})
})

$(function(){

	$("#logo").on({
	 "mouseover" : function() {
	    this.src = 'images/logo2.png';
	  },
	  "mouseout" : function() {
	    this.src='images/logo.png';
	  }
	});
})