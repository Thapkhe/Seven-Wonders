jQuery(document).ready(function() {

    var navOffset = jQuery("aside").offset().top;

    jQuery(window).scroll(function() {

        var scrollPos = jQuery(window).scrollTop();  
        
        if (scrollPos >= navOffset) {

            jQuery("aside").addClass("fixed");

        } else {

           jQuery("aside").removeClass("fixed"); 

        }
    });
    
    
}); 

