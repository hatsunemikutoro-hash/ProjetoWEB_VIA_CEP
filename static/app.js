
document.getElementById('cep').addEventListener('blur', fetchData)

const cep = document.getElementById('cep')
const logradouro = document.getElementById('logradouro')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const regiao = document.getElementById('regiao')
const num = document.getElementById('numero')

document.getElementById('numero').addEventListener('input', () => {
    localStorage.setItem("num", document.getElementById('numero').value)
})

document.getElementById('clear').addEventListener("click", () => {
    localStorage.clear()
    cep.value = "";
    logradouro.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
    regiao.value = "";
    num.value = "";

})

addEventListener('DOMContentLoaded', () => {

    cep.value = localStorage.getItem('cep')
    logradouro.value = localStorage.getItem('logradouro')
    bairro.value = localStorage.getItem('bairro')
    cidade.value = localStorage.getItem('cidade')
    estado.value = localStorage.getItem('estado')
    regiao.value = localStorage.getItem('regiao')
    num.value = localStorage.getItem('num')

})
async function fetchData() {
    const cep = document.getElementById('cep').value
    const logradouro = document.getElementById('logradouro')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    const regiao = document.getElementById('regiao')
    const num = document.getElementById('numero')

    localStorage.setItem("cep", cep)
    localStorage.setItem("logradouro", logradouro.value)
    localStorage.setItem("bairro", bairro.value)
    localStorage.setItem("cidade", cidade.value)
    localStorage.setItem("estado", estado.value)
    localStorage.setItem("regiao", regiao.value)
    

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`erro status: ${response.status}`);
        }
        const data = await response.json();
        logradouro.value = data['logradouro']
        bairro.value = data['bairro']
        cidade.value = data['localidade']
        estado.value = data['estado']
        regiao.value = data['regiao']
        console.log(data);
    } catch (error) {
        console.error('erro no fetch', error);
    }
}
