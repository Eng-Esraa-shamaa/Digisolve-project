$(document).ready(function(){
    //sticky-nav 
    $(".about-section").waypoint(function(direction){
        if(direction=='down'){
        $('nav').addClass('sticky-nav')}
        else{
            $('nav').removeClass('sticky-nav')   
        }
    })

})