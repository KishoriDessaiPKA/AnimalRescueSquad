$(document).ready(function(){

$(document).on("click", ".headerTxt a", function(e){
			toggleList(this);
	});
   
})

$(document).on("mouseleave",".subMenu", function(){
	 $(".headerTxt a").css("background", "none");
	$(this).hide();
})

function toggleList(cssSelector){
	    $(".headerTxt a").css("background", "none");
	    $(".subMenu").hide();

		var list = $(cssSelector).parent().find("ul");
	  	
    	if($(list).length == 1){
    	   list.hide().slideDown(500).attr("data-expand","true");
    	    $(cssSelector).css("background", "black");
    	}
}

