/* jquery.imagefit 
 *
 * Version 0.2 by Oliver Boermans <http://www.ollicle.com/eg/jquery/imagefit/>
 *
 * Extends jQuery <http://jquery.com>
 *
 */
/*
(function($) {
	$.fn.imagefit = function(options) {
		var fit = {
			all : function(imgs){
				imgs.each(function(){
					fit.one(this);
					})
				},
			one : function(img) {
				$(img)
				.css('width', (($(this).width() * 330) / 1280 + "px"));
			};
		};
	};
});
*/

(function($) {
	$.fn.imagefit = function(options) {
		var container = this;
		var fit = {
			all : function(imgs){
				imgs.each(function(){
					fit.one(this);
					})
				},
			one : function(img){

                /*

				$(img)
				.css('width', (($(this).width() * 330) / 1280 + "px"));

				console.log((this).width());
            }*/
				$(img)
					.height('100%').each(function()
					{
                        var window_width = $(window).width();
                        var width_attr_px = $(this).attr('width');
                        var width_attr = width_attr_px.substr(0, width_attr_px.length - 2);

                        console.log("------------------------");
                        console.log($(this));
                        console.log("src width: " + width_attr);
						console.log("body.width(): " + $(window).width());
                        console.log("this.width(): " + $(this).width() );
                        console.log("value: " + ((window_width * width_attr) / 1640));
                        console.log("margin-top: "+ $(this).attr('margin-top'));
                        $(img).css('width', (($(window).width() * width_attr) / 1640 + "px"));

                        console.log("width: " + $(this).width());

                    });

				}

		};
		
		this.each(function(){
				var container = this;
				
				// store list of contained images (excluding those in tables)
				var imgs = $('img', container).not($("table img"));
				
				// store initial dimensions on each image 
				imgs.each(function(){
					$(this).attr('startwidth', $(this).width())
						.attr('startheight', $(this).height())
						.css('max-width', "1092px");
				
					fit.one(this);
				});
				// Re-adjust when window width is changed
				$(window).bind('resize', function(){
					fit.all(imgs);
				});
			});
		return this;
	};
})(jQuery);
