const inpcname = document.getElementById("inpcname");
const inptsenha = document.getElementById("inptsenha");
const inptemail = document.getElementById("inptemail");
const btn = document.getElementById("btncreate");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    let inptvazio = true

    if (!inpcname.value.trim()) {
        inpcname.placeholder = "Faltou este campo!";
        inptemail = false;
    };

    if (!inptsenha.value.trim()) {
        inptsenha.placeholder = "Faltou este campo!";
        inptemail = false;
    };

    if (!inptemail.value.trim()) {
        inptemail.placeholder = "Faltou este campo!";
        inptemail = false;
    };

    if (inptvazio) {
        alert("Conta criada com sucesso!")
        location.reload(true)
        console.log("Enviando dados para o sistema!");
    } else {
        console.log("Não foi possível enviar os dados para o sistema!")
    };
});