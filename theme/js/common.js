/**
 * ȫվ����js
 * Created by zltheme on 2016/11/05
 */

$(function() {

	   $(".applist").slide({ titCell: ".hear ul", mainCell: ".bd ul", autoPage: true, effect: "left", vis: 11 });
       $(".applist-small").slide({ titCell: ".hear ul", mainCell: ".bd ul", autoPage: true, effect: "left", vis: 6 });


$("#chartRefineMenu dt").click(function (){
			var flag = $("#chartRefineMenu dd").is(":visible");
			if(flag){
				$("#chartRefineMenu dd").hide();
				document.getElementById("chartRefineMenu").className = "dd-hidden";
			}else{
				$("#chartRefineMenu dd").show();
				document.getElementById("chartRefineMenu").className = "dd-show";
			}
		});
$("#deviceRefineMenu dt").click(function (){
			var flag = $("#deviceRefineMenu dd").is(":visible");
			if(flag){
				$("#deviceRefineMenu dd").hide();
				document.getElementById("deviceRefineMenu").className = "dd-hidden";
			}else{
				$("#deviceRefineMenu dd").show();
				document.getElementById("deviceRefineMenu").className = "dd-show";
			}
		});
$("#typeRefineMenu dt").click(function (){
			var flag = $("#typeRefineMenu dd").is(":visible");
			if(flag){
				$("#typeRefineMenu dd").hide();
				document.getElementById("typeRefineMenu").className = "dd-hidden";
			}else{
				$("#typeRefineMenu dd").show();
				document.getElementById("typeRefineMenu").className = "dd-show";
			}
		});
$("#categoryRefineMenu dt").click(function (){
			var flag = $("#categoryRefineMenu dd").is(":visible");
			if(flag){
				$("#categoryRefineMenu dd").hide();
				document.getElementById("categoryRefineMenu").className = "dd-hidden";
			}else{
				$("#categoryRefineMenu dd").show();
				document.getElementById("categoryRefineMenu").className = "dd-show";
			}
		});						
});

 
    