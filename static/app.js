
document.getElementById('cep').addEventListener('blur', fetchData)

const input = document.getElementsByTagName('input')
input.addEventListener('input', () => {
    localStorage(input.value)
})

async function fetchData() {
    const cep = document.getElementById('cep').value
    const logradouro = document.getElementById('logradouro')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    const regiao = document.getElementById('regiao')

    localStorage.setItem(cep)

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
