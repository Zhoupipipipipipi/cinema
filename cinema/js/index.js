/**
 * Created by Administrator on 2016/10/25 0025.
 */
var showNav=false;
$('.icon-search').click(function(){
    if($(this).hasClass('icon-close')){
        $('.search-box').animate({left:256},'slow');
        hideContent('.search-box');
        $(this).removeClass('icon-close');
    }
    else{
        showContent('.search-box');
        $('.search-box').animate({left:0},'normal');
        $(this).addClass('icon-close');
    }
});
$(document).click(function(event){
    if($(event.target).hasClass('showNav')){
        $('.subnav-index').show();
    }
    else{
        $('.subnav-index').hide();
    }
});