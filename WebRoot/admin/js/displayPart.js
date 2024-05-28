;(function($){
 $.fn.extend({  
        displayPart:function () {  
            var displayLength = 100;  
            displayLength = this.attr("displayLength") || displayLength;  
            var text = this.text();  
            if (!text) return "";  
  
            var result = "";  
            var count = 0;  
            for (var i = 0; i < displayLength; i++) {  
                var _char = text.charAt(i);  
                if (count >= displayLength)  break;  
                if (/[^x00-xff]/.test(_char))  count++;  //双字节字符，//[u4e00-u9fa5]中文  
  
                result += _char;  
                count++;  
            }  
            if (result.length < text.length) {  
                result += "...";  
            }  
            this.text(result);  
        }  
    });  
})(jQuery);