var tmp;

function print(str){
    console.log(str);
}
Array.prototype.each = function(a, b) {
    a(this);
};

//Extend
jQuery.extend({
    DomRender: function(DomObj) {
     
        var body = DomObj['body'];

        makeHTMLTag = function(DomObj) {
            //parse Obj to HTML TAG 

            //make HTML ELE
            var $tag;
            for (var p in DomObj.body.L1) {
                $tag = document.createElement(p);

                var ary = DomObj.body.L1[p].attr.split("=");
                ary.each(
                    function(arg) {
                        if (arg.length <= 2) {
                            $tag.setAttribute(arg[0], arg[1]);
                        }
                    }
                );
            }

            return $tag;
        };
        return makeHTMLTag(DomObj);
    },
});

(function($){
    "use strict"

    $(document).ready(function(){
        // Initial Code

        var pageH = document.documentElement.clientHeight;
        $(window).on('scroll', function(ev) { 
            var flag = true;
            if (pageH < $(this).scrollTop()){
                $('div.outer-box').css("position", "fixed");
                $('div.outer-box').css("top", "auto");
                flag = false;
            }
            if (pageH > $(this).scrollTop()){
                $('div.outer-box').css("position", "absolute");
//                $('div.outer-box').css("top", "auto");
            }

        });
       
        var Dom = {
            html: {},
            head: {},
            body: {
                L1: {
                    div: {
                        attr: "class=content" 
                    },
                },
            },
        };

       tmp = $.DomRender(Dom);
    });
})(jQuery);
