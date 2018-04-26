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

		


	$('#section2 #right').click(function(){
		list.animate({"marginLeft":-400}, 500, function(){
			var firstItem = list.find('li:first'),
				lastItem = list.find('li:last');
			lastItem.after(firstItem);
			list.css({marginLeft:0});
		});
		numberSlide++;
		slideNumber();
	});

	$('#section2 #left').click(function(){
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