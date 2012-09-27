// Placeholder fallback script for IE 
// By: Corey Rothwell

(function($){
        $(function(){
                $.each($('[placeholder]'), function(){
                        var item = $(this);
                        item.val(item.attr('placeholder'));
                });
                $('[placeholder]').focus(function(){
                        var item = $(this);
                        if(item.val() === item.attr('placeholder')) {
                                item.val('');
                        }
                }).blur(function(){
                        var item = $(this);
                        if(item.val() === '') {
                                item.val(item.attr('placeholder'));
                        }
                });
        });
})(jQuery);