function valida(){
    let sEmail = document.querySelector("#email").value;
        var emailFilter=/^.+@.+\..{2,}$/;
        var illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
        if(!(emailFilter.test(sEmail))||sEmail.match(illegalChars)){
            document.querySelector("#email").value='';
            document.getElementById("email").classList.add('erro');
            
           document.querySelector("#email").setAttribute("placeholder","Por favor informe um e-mail válido");
           
           
        }
    }
