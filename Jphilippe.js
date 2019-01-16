function navPosition () {
    if($(window).scrollTop() >= $(window).height()-$('#home nav').height()){
        $('#home nav').addClass("navFix");
        
    }else{
        $('#home nav').removeClass("navFix");
        
    }
    
    if($(window).scrollTop() >= $(window).height()+350){
        $('#bienvenue > span').slideDown(500);
    }else{
        $('#bienvenue > span').slideUp(500);
    }
}
function navMobile () {
    $("#home nav").off("click").on("click",function(){
        //si il a la classe active on enleve et ferme le menu sinon on ajoute et on ouvre le menu pareil pour l'effet de la croix
        if($("#home nav span:nth-child(3)").hasClass("open")){
            $("#home nav span:nth-child(3)").removeClass("open");
        }else{
            $("#home nav span:nth-child(3)").addClass("open");
        }
        if($('#home nav #menu').hasClass("display")){
            $('#home nav #menu').removeClass("display");
            $('#home nav #menu').hide();

        } else {
            $('#home nav #menu').addClass("display");
            $('#home nav #menu').fadeIn(800);
        }
    });
}