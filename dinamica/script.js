$(".alert").alert();
$(document).ready(function(){
    $("#enviar").click(function(){
    	if($("#input").val() == "" ){
    		alert("Você deve inserir um texto.");
    	} else if ($("#radioLearn").is(':checked')) {
		var element = "<li class=\"list-group-item ng-binding ng-scope\">"+ $("#input").val() +
        	"<span class=\"pull-right\">" +
        	"<button type=\"button\" id=\"mover\" class=\"btn btn-xs\"><span class=\"glyphicon glyphicon-arrow-right\"></span></button>"
             + " <button class=\"btn btn-xs\" id=\"remover\"><span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>"
        	$("#learn").append(element).hide().show('slow');
		
        } else {
        	$("#learned").append("<li class=\"list-group-item ng-binding ng-scope\">"+ $("#input").val() +
        	"<span class=\"pull-right\">" +
        	"<button class=\"btn btn-xs\" id=\"remover\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>").hide().show('slow');
        }
    });

    $("#learn").on("click", "#mover", function() {
       var parent = $(this).parent().parent();
       var text = parent.text();
	parent.hide('slow', function(){ $target.remove(); });
        $("#learned").append("<li class=\"list-group-item ng-binding ng-scope\">"+ text+
        	"<span class=\"pull-right\">" +
        	"<button class=\"btn btn-xs\" id=\"remover\"> <span class=\"glyphicon glyphicon-trash\"></span></button>" +
        	"</span></li>").hide().show('slow');
	
    });

    $(".list-group").on("click", "#remover", function() {
       var parent = $(this).parent().parent();
       parent.hide('slow', function(){ $target.remove(); });
    });

});
