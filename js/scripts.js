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