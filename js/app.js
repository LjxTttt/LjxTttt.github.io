$(function(){
  	var siderbarw = $(".sidebar").outerHeight(true);
    var content = $(".content").outerHeight(true);
    if(content>siderbarw){
    	$("body").css("height",""+content+"px");
    }
	
})