/*After PHP try/catch return result from contact.php*/

if(window.location.search.length > 0){
    let getVariables = window.location.search.split('&');
    var resultTryCatch = parseInt(getVariables[0].split('=')[1]);
    var fullName = getVariables[1].split('=')[1];
    var modal = document.getElementById("myModal");
    var modalHeader = document.getElementById("modalHeader");
    var modalBody = document.getElementById("modalBody");

    if(resultTryCatch == 0){
        modalHeader.innerHTML = "<h1>Ops!</h1>";
        modalBody.innerHTML = "<h2>Something went wrong!</h2><p>Please <em>" + fullName +"</em> , try again later</p>";
        modal.style.display = "block";        
    }else if(resultTryCatch == 1){
        modalHeader.innerHTML = "<h1>Thanks for the message!</h1>";
        modalBody.innerHTML = "<h2><em>" + fullName +"</em>, I will contact you as soon as possible</h2><p>Have a great day!</p>";
        modal.style.display = "block";
    }

    closeModal = () => {
        modal.style.display = "none";
    }
}