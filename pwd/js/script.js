/*
Slider 
@autor : oneTarek
*/

jQuery( function($){
	var current_slide = 0;	
	var slide_count = 0;
	function sld_move_next(){
		var next_slide = current_slide + 1;
		if( next_slide > slide_count - 1 )
		{
			next_slide =  0;
			
		}
		current_slide = next_slide
		$("#slider_content").children("img").hide();
		$("#slider_content").children("img").eq(next_slide).fadeIn( "slow" );		
	}
	function sld_move_prev(){
		var prev_slide = current_slide - 1;
		if( prev_slide < 0 )
		{
			prev_slide =  slide_count-1;
			
		}
		current_slide = prev_slide
		$("#slider_content").children("img").hide();
		$("#slider_content").children("img").eq(prev_slide).fadeIn( "slow" );		
	}		
	$(document).ready(function(){
	
		slide_count = $("#slider_content").children("img").size();
		//$("#slider_content").children("img").hide();
		//$("#slider_content").children("img").eq(0).show();
		
		$("#slider_button_left").click(function( e ){
			sld_move_next();									
		});
	
		$("#slider_button_right").click(function( e ){
			sld_move_prev();
		});
		
		setInterval( sld_move_next, 3000);
	
	});//end document ready	

})( jQuery );