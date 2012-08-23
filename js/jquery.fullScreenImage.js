(function($) {
	

	$.fn.fullScreenImage = function( method ){
		//var $this = $(this);
		function resizeImg() {
			var bgImg = $('img#bg');

			var imgwidth = bgImg.width();
			var imgheight = bgImg.height();
			console.log(imgwidth);
			
			var winwidth = $(window).width();
			var winheight = $(window).height();

			var widthratio = winwidth / imgwidth;
			var heightratio = winheight / imgheight;

			var widthdiff = heightratio * imgwidth;
			var heightdiff = widthratio * imgheight;

			if(heightdiff>winheight) {
			  bgImg.css({
			    width: winwidth+'px',
			    height: heightdiff+'px'
			  });
			} else {
			  bgImg.css({
			    width: widthdiff+'px',
			    height: winheight+'px'
			  });		
			}
		} 
	
    this.on("click", function(){
			$('img#bg').attr("src", this.src.replace("_thumb",""));
    	resizeImg();
    }); // resizeImg());
    //$(this).on("click", resizeImg());

    $(window).resize(function() {
      resizeImg();
    }); 

	};		


})(jQuery);