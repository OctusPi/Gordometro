// elementos de entrada
const entrada = document.getElementById('entrada')
const i_nome = document.getElementById('i_nome')
const i_peso = document.getElementById('i_peso')
const i_altura = document.getElementById('i_altura')
const btn_calcular = document.getElementById('btn_calcular')

// elementos de saída
const saida = document.getElementById('saida')
const img_imc = document.getElementById('img_imc')
const valor_imc = document.getElementById('valor_imc')
const user_nome = document.getElementById('user_nome')
const resultado_imc = document.getElementById('resultado_imc')
const btn_voltar = document.getElementById('btn_voltar')

// checagem teclas
const teclas_permitidas = ['0','1','2','3','4','5','6','7','8','9','.','Backspace'];

function check_tecla(e){
    if(!teclas_permitidas.includes(e.key)){
        e.preventDefault()
        return false
    }
}

// calculo imc
function calculaIMC(peso, altura){
    const f_peso = parseFloat(peso)
    const f_altura = parseFloat(altura)
    const imc = (f_peso / (f_altura * f_altura)).toFixed(2)

    const resultado = {
        nome: i_nome.value,
        valor: imc,
        img: null,
        frase: null
    }

    if(imc < 16){
        resultado.img = 'imgs/peso_0.png'
        resultado.frase = 'Tenho quase certeza que morreu!'

    }else if(imc >= 16 && imc < 18){
        resultado.img = 'imgs/peso_1.png'
        resultado.frase = 'Magreza Moderada, o vento pode levar!'

    }else if(imc >= 18 && imc < 25){
        resultado.img = 'imgs/peso_2.png'
        resultado.frase = 'Peso Normal, temos um atleta!'

    }else if(imc >= 25 && imc < 29){
        resultado.img = 'imgs/peso_3.png'
        resultado.frase = 'Sobrepeso, Devem ser os ossos largos!'

    }else if(imc >= 29 && imc < 35){
        resultado.img = 'imgs/peso_3.png'
        resultado.frase = 'Obesidade nivel 01, Você está passando dos limites!'

    }else if(imc >= 25 && imc < 40){
        resultado.img = 'imgs/peso_4.png'
        resultado.frase = 'Obesidade nivel 02, Você tem seu próprio campo gravitacional!'

    }else{
        resultado.img = 'imgs/peso_5.png'
        resultado.frase = 'Obesidade nivel 03, Se não morreu, tá perto!'
    }

    return resultado
}

function mostrarResultado(){
    if(i_nome.value == '' || i_peso.value == '' || i_altura.value == ''){
        alert('Campos obrigatórios não preenchidos!')
        return
    }

    const imc = calculaIMC(i_peso.value, i_altura.value)
    img_imc.src = imc.img
    user_nome.innerText = imc.nome
    valor_imc.innerText = imc.valor
    resultado_imc.innerText = imc.frase

    entrada.classList.add('d-none')
    saida.classList.remove('d-none')
}

function resetApp(){
    i_nome.value = ''
    i_peso.value = ''
    i_altura.value = ''

    entrada.classList.remove('d-none')
    saida.classList.add('d-none')
}

i_peso.addEventListener('keydown', check_tecla)
i_altura.addEventListener('keydown', check_tecla)

btn_calcular.addEventListener('click', mostrarResultado)
btn_voltar.addEventListener('click', resetApp)