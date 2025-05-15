function quizstart(){
    rotateElement("quiz")
    document.getElementById("start").remove()
    document.getElementById("quiz").classList.remove("hidden")
}

function rotateElement(id) {
    const element = document.getElementById(id)
    element.classList.remove("rotate")
    void element.offsetWidth
    element.classList.add("rotate")
}

quiz_score = {
    toyota_bz3x: 0,
    byd_dolphin: 0,
    chevrolet_silverado: 0,
    tesla_roadster: 0
}

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
    new QA(1, "Qual o seu estilo de viagem preferido?", "Trilhas e natureza", "Percursos urbanos curtos", "Viagens com carga ou equipamentos", "Viagens confortáveis e sofisticadas"),
    new QA(2, "Qual a principal utilidade que você espera do carro?", "Versatilidade e resistência", "Economia e mobilidade no dia a dia", "Capacidade de carga e força", "Conforto e status"),
    new QA(3, "Com que frequência você viaja para lugares fora do asfalto?", "Frequentemente", "Quase nunca", "Às vezes, levando equipamentos", "Raramente, prefiro rodovias bem pavimentadas"),
    new QA(4, "Qual o tipo de design que mais te agrada?", "Robusto e imponente", "Simplicidade funcional", "Estilo forte e utilitário", "Moderno e elegante"),
    new QA(5, "Quantas pessoas geralmente viajam com você?", "Família com bastante bagagem", "Sozinho ou com mais uma pessoa", "Grupo com equipamentos de trabalho", "Família em conforto total"),
    new QA(6, "Onde você costuma estacionar seu carro?", "Garagens amplas ou ao ar livre", "Ruas ou garagens pequenas", "Estacionamentos de obras ou sítios", "Estacionamentos privados e seguros"),
    new QA(7, "Qual a sua prioridade ao dirigir?", "Desempenho em terrenos diversos", "Facilidade de manobrar", "Força e espaço para trabalho", "Silêncio e conforto"),
    new QA(8, "Você se preocupa com a autonomia do veículo?", "Sim, principalmente em trilhas", "Sim, para deslocamentos urbanos", "Sim, quando levo carga pesada", "Sim, para longas viagens com conforto"),
    new QA(9, "Com que frequência você transporta carga ou objetos grandes?", "Ocasionalmente em viagens", "Raramente", "Frequentemente", "Somente em viagens especiais"),
    new QA(10, "Qual imagem você gostaria que seu carro transmitisse?", "Aventureiro e pronto pra tudo", "Prático e acessível", "Forte e trabalhador", "Elegante e sofisticado")
]

function score(option){
    rotateElement("quiz")
    setTimeout(() => changeQA(), 1000)
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
            quiz_score["toyota_bz3x"]++
            break
        case 2:
            quiz_score["byd_dolphin"]++
            break
        case 3:
            quiz_score["chevrolet_silverado"]++
            break
        case 4:
            quiz_score["tesla_roadster"]++
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
    tb_result = quiz_score["toyota_bz3x"]/10*100
    bd_result = quiz_score["byd_dolphin"]/10*100
    cs_result = quiz_score["chevrolet_silverado"]/10*100
    tr_result = quiz_score["tesla_roadster"]/10*100
    count = 0

    addvalues = setInterval(()=>{
        if (count == 100) clearInterval(addvalues)
        if (count <= tb_result) {
            document.getElementById("rslt1").innerHTML = `${count}%`
        }
        if (count <= bd_result) {
            document.getElementById("rslt2").innerHTML = `${count}%`
        }
        if (count <= cs_result) {
            document.getElementById("rslt3").innerHTML = `${count}%`
        }
        if (count <= tr_result) {          
            document.getElementById("rslt4").innerHTML = `${count}%`
        }
        count++
    },50)
    featureCars(tb_result, bd_result, cs_result, tr_result)    
}

function featureCars(a, b, c, d){
    const min = 30
    makefeature = (txtid, photoid) => {
        document.getElementById(txtid).classList.remove("hidden")
        document.getElementById(photoid).classList.add("feature-car")
    }

    if (a >= min) makefeature("txtcar1", "photocar1")
    if (b >= min) makefeature("txtcar2", "photocar2")
    if (c >= min) makefeature("txtcar3", "photocar3")
    if (d >= min) makefeature("txtcar4", "photocar4")
}
