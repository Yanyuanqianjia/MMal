/**
 *
 * Author lj
 * Date 2018-04-04 17:43
 * Descriotion
 *
 */

require('./index.css')



    $(window).scroll(function() {
        if($(document).scrollTop() > $("#yheader").offset().top + 140){
            $("#yHeaderSmall").css('display','block');
        };
    })
