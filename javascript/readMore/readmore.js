function readMore(){
    var dots = document.getElementById("dots");
    var readMore = document.getElementsByClassName("readMore");
    var btnReadMore = document.getElementById("btnReadMore");
    var marginTopService = document.getElementById("marginTopService");

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btnReadMore.innerHTML = "<i class='fas fa-angle-double-down'></i>";
        for(i=0;i<readMore.length;i++){
            readMore[i].style.display = "none";
        }
        marginTopService.style.marginTop = "36%" 
    }else{
        dots.style.display = "none";
        btnReadMore.innerHTML = "<i class='fas fa-angle-double-up'></i>";
        for(i=0;i<readMore.length;i++){
            readMore[i].style.display = "inline";
        }
        marginTopService.style.marginTop = "53.4%" 
    }
}
