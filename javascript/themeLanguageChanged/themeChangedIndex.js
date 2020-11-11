window.onload = function() {
    window.localStorage.clear();
};

/*index/menu*/
function radioOption(option){
    var li;
    if(option == "day"){
        document.getElementById("navContainer").style.backgroundColor = "#2e2f36";
        li = document.getElementById("menu").getElementsByTagName("li");
        for(var x=0;x < li.length;x++){
            li[x].style.borderBottom = "0.1px solid black";
        }          
    }
    else if(option == "night"){
        document.getElementById("navContainer").style.backgroundColor = "#17181B";
        li = document.getElementById("menu").getElementsByTagName("li");
        for(var x=0;x < li.length;x++){
            li[x].style.borderBottom = "0.1px solid #2e2f36";    
        }   
    }
    /*Using localStorage to change theme*/
    window.localStorage.setItem("theme", option);   
    /*Load the Iframe content*/
    let iFrame = document.getElementById('iFrame');
    iFrame.contentWindow.postMessage({key:'theme', data:option}, '*');
};