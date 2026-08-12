from flask import Flask, render_template, request
from table_utils import *

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.post("/register")
def register():
    cep = (request.form.get("cep")).strip()
    logradouro = (request.form.get("logradouro")).strip()
    bairro = (request.form.get("bairro")).strip()
    cidade = (request.form.get("cidade")).strip()
    estado = (request.form.get("estado")).strip()
    regiao = (request.form.get("regiao")).strip()
    numero = (request.form.get("numero")).strip()

    valores = (cep, logradouro, bairro, cidade, estado, regiao, str(numero))
    print(valores)

    insert_table(sql_insert, valores)

    return "thanks", 200

if __name__ == "__main__":
    app.run()