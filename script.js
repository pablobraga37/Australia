let nome = prompt("Olá! Qual o seu nome?");

document.getElementById("boasVindas").innerText =
  "Bem-vindo(a), " + nome + "! Vamos conhecer a Austrália!";

document.getElementById("descricao").innerText =
  "A Austrália é um país fascinante, conhecido por suas paisagens exóticas, como a Grande Barreira de Corais, o deserto do Outback e a moderna Sydney com sua famosa Ópera. Prepare-se para uma aventura inesquecível!";

document.getElementById("imagem").src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sydney_Opera_House_Sails.jpg/1024px-Sydney_Opera_House_Sails.jpg";
  
  function irParaGaleria() {
    window.location.href = "galeria.html";
  }
  