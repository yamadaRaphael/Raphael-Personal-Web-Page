var WOW = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function(){
        var htmlElem = document.getElementById("html");
        var cssElem = document.getElementById("css");
        var javaScriptElem = document.getElementById("javaScript");
        var phptElem = document.getElementById("php");
        var cElem = document.getElementById("c#");
        var javaElem = document.getElementById("java");
        var androidElem = document.getElementById("android");
        var sqlElem = document.getElementById("SQL");
        var arrayElem = [htmlElem,cssElem,javaScriptElem,phptElem,cElem,javaElem,androidElem,sqlElem];
        var html = parseInt(document.getElementById("html").getAttribute("data-value"));
        var css = parseInt(document.getElementById("css").getAttribute("data-value"));
        var javaScript = parseInt(document.getElementById("javaScript").getAttribute("data-value"));
        var php = parseInt(document.getElementById("php").getAttribute("data-value"));
        var c = parseInt(document.getElementById("c#").getAttribute("data-value"));
        var java = parseInt(document.getElementById("java").getAttribute("data-value"));
        var android = parseInt(document.getElementById("android").getAttribute("data-value"));
        var SQL = parseInt(document.getElementById("SQL").getAttribute("data-value"));
        var arrayDataValue = [html, css, javaScript, php, c, java, android, SQL];
        var bar = 0;
        var id = setInterval(frame, 40);        
        
        function frame(){
            if(bar == 100) {
                clearInterval(id); 
            }
            else{
                for(i=0;i < arrayDataValue.length;i++){
                    if(arrayDataValue[i] >= bar){
                        arrayElem[i].style.width = bar + "%"; 
                        arrayElem[i].innerHTML = bar + "%";
                    }
                }
                bar++;
            }
        };
    },
    scrollContainer: null,
    resetAnimation: true,
});
WOW.init();