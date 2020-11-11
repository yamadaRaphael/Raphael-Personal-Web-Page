window.onload = function() {
    window.localStorage.clear();
};

var arrLang = {
    'eng' : {
        'home' : "Home",
        'aboutMe' : "About me",
        'resume' : "Resume",
        'portifolio' : "Portifolio",
        'contact' : "Contact",
        'day' : "Day Theme",
        'night' : "Night Theme",
    },
    'pt' : {
        'home' : "Página Principal",
        'aboutMe' : "Sobre Mim",
        'resume' : "Currículo",
        'portifolio' : "Portifólio",
        'contact' : "Contato",
        'day' : "Tema Dia",
        'night' : "Tema Noite",
    }
};

$(function(){    
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });

        window.localStorage.setItem("language", lang);
        let iFrame = document.getElementById('iFrame');
        iFrame.contentWindow.postMessage({key:'lang',data:lang}, '*');
    });
});