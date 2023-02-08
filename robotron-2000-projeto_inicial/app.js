
const diminuirBraco = document.querySelector('#diminuir')
const estatica = document.querySelector('#forca').innerText
const submit = document.querySelector('#producao')
const estaticaNucleos = document.querySelector('#nucleos')
const poder = document.querySelector('#poder') 
const value = document.querySelectorAll('.controle-ajuste')

for(elemento of value) {
    elemento.addEventListener('click', (e) => {
        aumentandoValor(e.target.textContent, e.target.parentNode)
    })
} 

function aumentandoValor(operacao, controle) {
    const arrayInput = controle.querySelector('.controle-contador')
    if (operacao === "+") {
        arrayInput.value = parseInt(arrayInput.value) + 1
    }else{
        arrayInput.value = parseInt(arrayInput.value) - 1
    }
}

var robotron = {
    forca: parseInt(estatica),
    poder: parseInt(estaticaNucleos)
}

const buildar = (event) => {
    event.preventDefault()
    var valor = parseInt(document.querySelector('#blindagem').value)
    forca = valor * robotron.forca
    document.querySelector('#forca').innerText = forca
    console.log(forca);
}

submit.onclick = buildar
console.log(robotron.forca)