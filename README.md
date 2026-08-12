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

ALTER USER 'nome_do_usuario'@'localhost' IDENTIFIED BY 'nova_senha';
FLUSH PRIVILEGES;

-- SO ESSE FUNCIONA SLA PQ NAO MUDE NUNCA!!!!!!!!!!!!!!!!!!!!!!!!!!!!