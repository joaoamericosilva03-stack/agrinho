let score = 0;
let index = 0;

/* 🌙 modo escuro */
function toggleDark() {
    document.body.classList.toggle("dark");
}

/* 🔆 brilho */
function aumentarBrilho() {
    document.body.classList.remove("dim");
    document.body.classList.add("bright");
}

function diminuirBrilho() {
    document.body.classList.remove("bright");
    document.body.classList.add("dim");
}

/* 🧠 QUIZ (10 perguntas estilo Quizizz) */
const questions = [
    {
        q: "O que é agro sustentável?",
        options: ["Desmatamento", "Produção com preservação", "Mineração", "Poluição"],
        answer: 1
    },
    {
        q: "Qual recurso deve ser preservado?",
        options: ["Plástico", "Água", "Gasolina", "Fogo"],
        answer: 1
    },
    {
        q: "O plantio direto ajuda em:",
        options: ["Erosão do solo", "Preservação do solo", "Poluição", "Desmatamento"],
        answer: 1
    },
    {
        q: "Qual é um benefício do agro sustentável?",
        options: ["Mais poluição", "Menos alimentos", "Solo saudável", "Desperdício"],
        answer: 2
    },
    {
        q: "O controle biológico usa:",
        options: ["Agrotóxicos fortes", "Insetos naturais", "Plástico", "Fogo"],
        answer: 1
    },
    {
        q: "Agricultura sustentável ajuda:",
        options: ["Destruir rios", "Preservar o meio ambiente", "Poluir o ar", "Acabar com plantas"],
        answer: 1
    },
    {
        q: "O que evita erosão?",
        options: ["Desmatamento", "Cobertura vegetal", "Queimada", "Lixo"],
        answer: 1
    },
    {
        q: "Rotação de culturas serve para:",
        options: ["Cansar o solo", "Melhorar o solo", "Poluir", "Secar rios"],
        answer: 1
    },
    {
        q: "Agro sustentável usa:",
        options: ["Tecnologia e natureza", "Apenas fogo", "Apenas máquinas poluentes", "Nada"],
        answer: 0
    },
    {
        q: "O objetivo principal é:",
        options: ["Destruir natureza", "Produzir sem prejudicar o futuro", "Poluir rios", "Acabar com florestas"],
        answer: 1
    }
];

function loadQuestion() {
    if (index >= questions.length) {
        document.getElementById("question").innerText = "Quiz finalizado!";
        document.getElementById("options").innerHTML = "";
        return;
    }

    let q = questions[index];

    document.getElementById("question").innerText = q.q;

    let optionsHTML = "";

    q.options.forEach((opt, i) => {
        optionsHTML += `<button onclick="checkAnswer(${i})">${opt}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(i) {
    if (i === questions[index].answer) {
        score++;
        document.getElementById("score").innerText = score;
        document.getElementById("result").innerText = "✔ Correto!";
    } else {
        document.getElementById("result").innerText = "❌ Errado!";
    }
}

function nextQuestion() {
    index++;
    document.getElementById("result").innerText = "";
    loadQuestion();
}

/* iniciar quiz */
loadQuestion();
