function mudarnome() {   
    // determinando consts e variaveis
    const inputnome = document.getElementById("inputnome")
    let nome= inputnome.value.trim()
    const saudação= document.getElementById("saudação")
    
    
        if (nome == "") {
        let msgsemnome = "Insira um nome para personalizar!";
        saudação.textContent= msgsemnome;
        saudação.style.color = "#A34743"
    }
    else{
       let msgcomnome = "Olá, " + nome + "!"
        saudação.textContent= msgcomnome
        saudação.style.color = "#28A745"
    }

     inputnome.value= ""
}

