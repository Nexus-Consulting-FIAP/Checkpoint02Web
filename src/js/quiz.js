function quizstart(){
    rotateElement("quiz")
    document.getElementById("start").remove()
    document.getElementById("quiz").classList.remove("hidden")
}
//DEBUG -> TIRAR DEPOIS!
quizstart()

function rotateElement(id) {
    const element = document.getElementById(id)
    element.classList.remove("rotate")
    void element.offsetWidth
    element.classList.add("rotate")
}

quiz_score = {
    jeep_renegade: 0,
    toyota_corolla: 0,
    ram_dodge: 0,
    ferrari_812: 0
}
//ADD FOTO NO FINAL E BOTÃO HOME BONITO
class QA{
    index
    question
    ans1
    ans2
    ans3
    ans4
    constructor(index, question, ans1, ans2, ans3, ans4){
        this.index = index
        this.question = question
        this.ans1 = ans1
        this.ans2 = ans2
        this.ans3 = ans3
        this.ans4 = ans4
    }
}

qa_array = [
    new QA(
        1, 
        'Como você costuma usar o carro no dia a dia?',
        'Para trilhas e aventuras fora de estrada.',
        'Para ir ao trabalho ou faculdade com economia.',
        'Para carregar equipamentos ou viajar em estradas de terra.',
        'Para passeios de luxo e status social.'
    ),
    new QA(
        2, 
        'Qual característica você mais valoriza em um carro?',
        'Capacidade off-road e robustez',
        'Confiabilidade e custo-benefício',
        'Potência e força de carga',
        'Desempenho e design esportivo'
    ),
    new QA(
        3, 
        'Onde você mais dirige?',
        'Trilhas, montanhas e terrenos irregulares',
        'Cidade e estrada com conforto',
        'Interior e fazendas com muita carga',
        'Rodovias e pistas em alta velocidade'
    ),
    new QA(
        4, 
        'Qual seu estilo de vida?',
        'Aventureiro e espontâneo',
        'Prático e equilibrado',
        'Trabalhador e robusto',
        'Ambicioso e sofisticado'
    ),
    new QA(
        5, 
        'Qual desses destinos você prefere para uma viagem?',
        'Serra da Canastra ou Chapada dos Veadeiros',
        'Campos do Jordão ou Foz do Iguaçu',
        'Pantanal ou interior do Mato Grosso',
        'Riviera Francesa ou Las Vegas'
    ),
    new QA(
        6, 
        'Se você ganhasse R$ 200 mil agora, o que faria com o dinheiro?',
        'Investiria em experiências de aventura',
        'Compraria um carro equilibrado e guardaria o resto',
        'Melhoraria minha estrutura de trabalho e transporte',
        'Compraria um carro esportivo de luxo'
    ),
    new QA(
        7, 
        'Como você define sua relação com carros?',
        'Companheiro de aventura',
        'Meio de transporte confiável',
        'Ferramenta de trabalho e versatilidade',
        'Símbolo de sucesso e performance'
    ),
    new QA(
        8, 
        'Qual adjetivo te representa melhor?',
        'Corajoso',
        'Racional',
        'Forte',
        'Ambicioso'
    ),
    new QA(
        9, 
        'Qual desses hobbies você prefere?',
        'Acampar ou explorar a natureza',
        'Viajar com conforto e segurança',
        'Trabalhar com animais ou equipamentos',
        'Correr, curtir velocidade e luxo'
    ),
    new QA(
        10, 
        'Em qual dessas frases você mais acredita?',
        'A vida é uma aventura a ser vivida.',
        'Menos é mais: praticidade é tudo.',
        'Força e resistência levam mais longe.',
        'Você é o que você dirige.'
    )
]

function score(option){
    rotateElement("quiz")
    changeQA()
    give1point(option)
}

index = 0
function changeQA(){
    if (index == 10){
        endQuiz()
        return
    }
    document.getElementById("question").innerHTML = `${qa_array[index].index}. ${qa_array[index].question}`

    document.getElementById(1).innerHTML = qa_array[index].ans1
    document.getElementById(2).innerHTML = qa_array[index].ans2
    document.getElementById(3).innerHTML = qa_array[index].ans3
    document.getElementById(4).innerHTML = qa_array[index].ans4

    index++
}
changeQA()

function give1point(value){
        switch (value){
        case 1:
            quiz_score["jeep_renegade"]++
            break
        case 2:
            quiz_score["toyota_corolla"]++
            break
        case 3:
            quiz_score["ram_dodge"]++
            break
        case 4:
            quiz_score["ferrari_812"]++
            break
    }
}

function endQuiz() {
    document.getElementById("quiz").remove()
    rotateElement("end")
    document.getElementById("end").classList.remove("hidden")
    calculateResults()
}

function calculateResults(){
    
}
//DEBUG -> TIRAR DEPOIS!
endQuiz()