

function responsiveMobileMenu() {	
		$('.rwd').each(function() {
			
			
			
			$(this).children('ul').addClass('rwd-main-list');	// mark main menu list
			
			
			var $style = $(this).attr('data-menu-style');	// get menu style
				// if ( typeof $style == 'undefined' ||  $style == false )
				// 	{
				// 		$(this).addClass('graphite'); // set graphite style if style is not defined
				// 	}
				// else {
						$(this).addClass($style);
					// }
					
					
			/* 	width of menu list (non-toggled) */
			
			var $width = 0;
				$(this).find('ul li').each(function() {
					$width += $(this).outerWidth();
				});
				
			// if modern browser
			
			if ($.support.leadingWhitespace) {
				$(this).css('max-width' , $width*1.05+'px');
			}
			// 
			else {
				$(this).css('width' , $width*1.05+'px');
			}
		
	 	});
}
function getMobileMenu() {

	/* 	build toggled dropdown menu list */
	
	$('.rwd').each(function() {	
				var menutitle = $(this).attr("data-menu-title");
				if ( menutitle == "" ) {
					menutitle = "Menu";
				}
				else if ( menutitle == undefined ) {
					menutitle = "Menu";
				}
				var $menulist = $(this).children('.rwd-main-list').html();
				var $menucontrols ="<div class='rwd-toggled-controls'><div class='rwd-toggled-title'>" + menutitle + "</div><div class='rwd-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
				$(this).prepend("<div class='rwd-toggled rwd-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");

		});
}

function adaptMenu() {
	
	/* 	toggle menu on resize */
	
	$('.rwd').each(function() {
			var $width = $(this).css('max-width');
			$width = $width.replace('px', ''); 
			if ( $(this).parent().width() < $width*1.05 ) {
				$(this).children('.rwd-main-list').hide(0);
				$(this).children('.rwd-toggled').show(0);
			}
			else {
				$(this).children('.rwd-main-list').show(0);
				$(this).children('.rwd-toggled').hide(0);
			}
		});
		
}

$(function() {

	 responsiveMobileMenu();
	 getMobileMenu();
	 adaptMenu();
	 
	 /* slide down mobile menu on click */
	 
	 $('.rwd-toggled, .rwd-toggled .rwd-button').click(function(){
	 	if ( $(this).is(".rwd-closed")) {
		 	 $(this).find('ul').stop().show(300);
		 	 $(this).removeClass("rwd-closed");
	 	}
	 	else {
		 	$(this).find('ul').stop().hide(300);
		 	 $(this).addClass("rwd-closed");
	 	}
		
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});