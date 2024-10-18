const validate = ()=>{
    const username = document.getElementById("input_1").value;
    const mailError = document.getElementById("mailError");
    const alphaExp = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    let nameStatus = false;
    
    if(username===""){
        mailError.textContent = ("please enter your email");

    }
    else{
        if(username.match(alphaExp)){
            mailError.textContent = ("");
            nameStatus =true;

        }
        else{
            mailError.textContent= ("Please enter your correct email address");
            
        }
    }


    if(nameStatus){
        return true;
    }
    else{
        return false;
    }


}









