function enviarWhatsApp(event) {
    event.preventDefault();
     // Envia as infomações para o Whatsapp
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    const numero = "5582982201611";

    const url = `https://api.whatsapp.com/send?phone=${numero}&text=Olá,%20meu%20nome%20é%20${encodeURIComponent(nome)}.%20${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}