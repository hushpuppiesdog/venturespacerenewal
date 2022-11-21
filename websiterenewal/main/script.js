$(document).ready(function(){
    // 처음에는 서브메뉴 안 보이게 초기화
    $('.submenu >').slideUp(0); {

    }

    $("header > nav.first > #mainmenu").mouseover(function(){        
        $("header > nav.first > #mainmenu > li > .submenu").stop().slideDown(200);    
    });
    
    $("header > nav.first > #mainmenu").mouseleave(function(){        
        $("header > nav.first > #mainmenu > li > .submenu").stop().slideUp(200);    
    });
});
