$(".alert").alert();
$(document).ready(function(){
    $("#enviar").click(function(){
    	if($("#input").val() == "" ){
    		alert("Você deve inserir um texto.");
    	} else if ($("#radioLearn").is(':checked')) {
        	$("#learn").append("<li class=\"list-group-item ng-binding ng-scope\">"+ $("#input").val() +
        	"<span class=\"pull-right\">" +
        	"<button type=\"button\" class=\"btn btn-xs btn-success\"><span class=\"glyphicon glyphicon-arrow-right\"></span></button>"
             + "<button class=\"btn btn-xs btn-info\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>");
        } else {
        	$("#learned").append("<li class=\"list-group-item ng-binding ng-scope\">"+ $("#input").val() +
        	"<span class=\"pull-right\">" +
        	"<button class=\"btn btn-xs btn-info\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>");
        }
    });

    $("#learn").on("click", ".btn-success", function() {
       var parent = $(this).parent().parent();
       var text = parent.text();
        //parent.fadeOut();
        parent.remove();
        $("#learned").append("<li class=\"list-group-item ng-binding ng-scope\">"+ text+
        	"<span class=\"pull-right\">" +
        	"<button class=\"btn btn-xs btn-info\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>");
    });

    $(".list-group").on("click", ".btn-info", function() {
       var parent = $(this).parent().parent();
        //parent.fadeOut();
        parent.remove();
    });

});