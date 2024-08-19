const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um(a) jovem curioo e aventureiro, certa noite andava pelas sombrias e gelidas ruas do calçadão de Pequena Londres. enquanto andava se depara com um único estabelecimento aberto, de la um cheiro agradavel e atordoante veio em sua direção. O que que você pensa?",
        alternativas: [
            {
                texto: "Decide entrar na no estabelecimento sombrio e misterioso e descobrir o que era aquele cheiro tão bom que havia sentido",
                afirmacao: "Seguiu sua curiosidade sem pensar duas vezes e foi atrás de descobrir que cheiro era aquele. "
            },
            {
                texto: "fica com medo e receio do lugar, mas se aproxima do estabelecimento",
                afirmacao: "mesmo com medo, sentiu que tinha que seguir sua curiosidade."
            }
        ]
    },
    {
        enunciado: "Enquanto se aproxima, voê percebe o cheiro ficando cada vez mais e mais forte, e entrando da de frente com uma bancada que seria a recepção, porém sem ninguém atrás. O que você faz?",
        alternativas: [
            {
                texto: "Toca a campainha do balcâo para chamar o atendente.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Prefere esperar em frente ao balcão até que alguém te note.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "O atendente te nota, e se aproxima com uma capa escura envolto em uma aura de mistério. Quando ele enfim chega perto o bastante para que você consiga ver o rosto dele, você não acredita no que esta a sua frente. O atendente era na verdade Michael Jackson que não morreu, mas sim forjou sua propriamorte e abriu um restaurante no centro de Londrina. Qual sua reação?",
        alternativas: [
            {
                texto: "Desconfiado da situação, decide averiguar se o homem a sua frente era realmente o rei do pop. Então diz (OOOOUUUUUUUUUUU) esperando uma resposta.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "EEU SABIA QUE VOCÊ ESTAVA VIVO (E comemora fazendo o moonwalk).",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Você emocionado por ter encontrado seu ídolo e Michael Jackson emocionado por ter encontrado um fã decidem comemorar. O que descidem fazer?",
        alternativas: [
            {
                texto: "Fazem uma pizza juntos e comem a luz de velas.",
                afirmacao: "O clima rolou com ele cantando Billie Jean, e você ganhou umamemória eterna."
            },
            {
                texto: "Decidem ir para um boteco.",
                afirmacao: "Os dois ficaram bebados e cairam na porrada!"
            }
        ];
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
