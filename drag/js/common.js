
$.fn.extend({
    forceLeft : function(){

        var height = $(this).height();
        var scaleYValue = "scale("+ (height/14.4)/4 +" ,"+ (height/14.4) + ")";
        var id = $(this).attr('id') + "_forceLeft";
        if($("#" + id).length != 0){
            $("#" + id).remove();
        }
        var force = $('<div id="'+id+'" style="position: absolute;font-size: 10px;" >{</div>');
        $("body").append(force);
        force.css({
            transform : scaleYValue,
            "transform-origin" : "left top",
            top : $(this).offset().top,
            left : $(this).offset().left - (5 * (height/14.4)/4)
        });
        

    },

    forceTop : function(){

        var height = $(this).width();
        var scaleYValue = "rotate(-90deg) scale("+ (height/14.4)/4 +" ,"+ (height/14.4) + ")";
        //var scaleYValue = "rotate(90deg)";
        var id = $(this).attr('id') + "_forceTop";
        if($("#" + id).length != 0){
            $("#" + id).remove();
        }
        var force = $('<div id="'+id+'" style="position: absolute;font-size: 10px;" >{</div>');
        $("body").append(force);
        force.css({
            top : $(this).offset().top + $(this).height() + 3,
            left : $(this).offset().left - force.width(),
            transform : scaleYValue,
            "transform-origin" : "100% 0"
            
        });
    },

    removeForceLeft : function(){
        var id = $(this).attr('id') + "_forceLeft";
        $("#" + id).remove();
    },

    removeForceTop : function(){
        var id = $(this).attr('id') + "_forceTop";
        $("#" + id).remove();
    }

});