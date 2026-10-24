# ProjetoWEB_VIA_CEP

Sistema web simples para cadastro de endereços com preenchimento automático por CEP, usando Flask no backend e a API ViaCEP no frontend.

## Visão geral

Este projeto foi desenvolvido para facilitar o cadastro de endereços, permitindo que o usuário informe apenas o CEP e tenha os demais dados preenchidos automaticamente. As informações são enviadas para um banco MySQL para registro.

## Funcionalidades

- Busca de endereço pelo CEP via API ViaCEP
- Preenchimento automático de logradouro, bairro, cidade, estado e região
- Cadastro de endereço com número e demais campos
- Armazenamento dos dados em banco MySQL
- Interface simples em HTML, CSS e JavaScript

## Tecnologias

- Python
- Flask
- MySQL Connector
- JavaScript
- HTML
- CSS
- API ViaCEP

## Estrutura do projeto

```text
ProjetoWEB_VIA_CEP/
├── main.py
├── table_utils.py
├── requirements.txt
├── README.md
├── static/
│   ├── app.js
│   ├── styles.css
│   └── images/
├── templates/
│   └── index.html
└── __pycache__/
```

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- Python 3.x
- MySQL Server
- pip

## Configuração do banco de dados

O projeto atual conecta-se ao MySQL com as seguintes credenciais no arquivo `table_utils.py`:

- host: `127.0.0.1`
- porta: `3306`
- usuário: `root`
- senha: `root`
- banco: `banco_enderecos`

Se necessário, ajuste essas configurações no arquivo `table_utils.py` para refletir o seu ambiente local.

Crie o banco e a tabela com o seguinte comando:

```sql
CREATE DATABASE banco_enderecos;

CREATE TABLE endereco3 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cep VARCHAR(8) NOT NULL,
    logradouro VARCHAR(200) NOT NULL,
    bairro VARCHAR(200) NOT NULL,
    cidade VARCHAR(200) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    regiao VARCHAR(200) NOT NULL,
    numero INT NOT NULL
);
```

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/hatsunemikutoro-hash/ProjetoWEB_VIA_CEP.git
cd ProjetoWEB_VIA_CEP
```

2. Crie um ambiente virtual:

```bash
python -m venv .venv
```

3. Ative o ambiente virtual:

- Linux/macOS:

```bash
source .venv/bin/activate
```

- Windows:

```bash
.venv\Scripts\activate
```

4. Instale as dependências:

```bash
pip install -r requirements.txt
```

5. Inicie a aplicação:

```bash
python main.py
```

6. Acesse no navegador:

```text
http://127.0.0.1:5000
```

## Observações

- A busca de endereço é feita pela API pública do ViaCEP.
- O código atual foi pensado como uma aplicação local e de estudo.
- O formulário salva o estado do usuário em `localStorage` no navegador, além de enviar os dados ao backend.

