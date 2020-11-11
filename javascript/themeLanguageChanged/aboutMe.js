function loadTheme(option) {
    /*Global variables*/
    var background = document.getElementById("background");
    var headingDashline = document.getElementById("headingDashline");
    var elementList = document.querySelectorAll("h1:not(#h1title),h2,p,button:not(#prev):not(#next):not(#readMoreBtn)");

    if(option == "day"){
        /*Background and Head dashline*/
        background.style.background = "white";        
        headingDashline.style.borderBottom = "0.5px solid rgba(0, 0, 0, 0.7)";
        /*Loop for remaining elements*/
        for(x=0;x<elementList.length;x++){
             elementList[x].style.color = "black";
        }
    }else if(option == "night"){
        /*Background and dashline*/
        background.style.backgroundColor = "#2C2D2F";
        headingDashline.style.borderBottom = "0.5px solid rgba(255,255,255,0.6)";
        /*Loop for remaining elements*/
        for(y=0;y<elementList.length;y++){
            elementList[y].style.color = "rgba(255,255,255,0.6)";
        }
    }
}

let option = window.localStorage.getItem("theme");
loadTheme(option);

window.addEventListener('message', event => {
    switch(event.data.key) {
        case 'lang':
            translateme(event.data.data)
        break;
        case 'theme':
            loadTheme(event.data.data);
        break;
    }
    
}); 

const language = window.localStorage.getItem("language");
if (language !== null && language !== 'eng') {
    translateme(language);
}

function translateme(key) {
    $('.lang').each(function (index, element) {
        console.log($(element).attr('key'));
        $(element).text(arrLang[key][$(element).attr('key')]);
    });
}

const arrLang = {
    'eng': {
        'aboutMe': "About me.",
        'computerTechnicianP':'I am bbb',
    },
    'pt': {
        
        'aboutMe': "Sobre Mim.",
        'computerTechnicianP':'Eu sou aaa',
    }
};