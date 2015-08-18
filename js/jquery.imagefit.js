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

				/*$(img)
				.css('width', (($(this).width() * 330) / 1280 + "px"));

				console.log(($this).width());*/
				$(img)
					.height('100%').each(function()
					{
						console.log($(container).width());
						$(this).width(Math.round(
							(($(container).width() * $(this).attr('startwidth') * 1)/ 1140))
						);
					})

				console.log($(img).width());
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
						.css('max-width', $(this).attr('startwidth')+"px");
				
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
