const words = ["Junior Web Developer    ", "Junior UI/UX Designer    ", "Junior Business Analyst    ", "Computer Technician   "];
let i = 0;
let timer;
document.getElementById('description').innerHTML = "I am a ";

function typingEffect(){
    let description = words[i].split("");
    var loopTyping = function(){
        if(description.length > 0){
            document.getElementById('description').innerHTML += "<span style='color:rgba(249, 150, 1, 0.9)'>" + description.shift() + "</span>";           
        }
        else{
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 90);
    };
    loopTyping();
};

function deletingEffect(){
    let description = words[i].split("");
    var loopDeleting = function(){
        if(description.length > 0){
            description.pop();
            document.getElementById('description').innerHTML = "I am a <span style='color:rgba(249, 150, 1, 0.9)'>" + description.join("") + "</span>";
        }
        else{
            if(words.length > (i + 1)){
                i++;
            }
            else{
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
};
typingEffect();