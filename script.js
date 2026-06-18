let fontSize = 16;
let pontos = 0;

/* 🌙 modo escuro */
function toggleDark() {
    document.body.classList.toggle("dark");
}

/* 🔠 fonte */
function increaseFont() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
}

function decreaseFont() {
    fontSize -= 2;
    document.body.style.fontSize = fontSize + "px";
}

/* 🎮 jogo */
function score() {
    pontos++;
    document.getElementById("pontos").innerText = pontos;
}

/* 💬 chat simples */
function chat() {
    let msg = document.getElementById("userInput").value.toLowerCase();
    let resposta = "";

    if (msg.includes("o que é")) {
        resposta = "É uma forma sustentável de produzir alimentos.";
    } 
    else if (msg.includes("benefício")) {
        resposta = "Protege o solo, água e aumenta qualidade dos alimentos.";
    }
    else if (msg.includes("água")) {
        resposta = "Ajuda a economizar água com irrigação eficiente.";
    }
    else {
        resposta = "Não entendi, tente perguntar sobre agricultura sustentável.";
    }

    document.getElementById("chatResposta").innerText = resposta;
}

/* 📊 gráfico simples */
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(20, 50, 50, 100);

ctx.fillStyle = "blue";
ctx.fillRect(100, 80, 50, 70);

ctx.fillStyle = "red";
ctx.fillRect(180, 30, 50, 120);
