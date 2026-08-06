import mysql.connector

sql_insert = "INSERT INTO enderecos (cep, logradouro, numero, complemento, bairro, cidade, uf) VALUES (%s, %s, %s, %s, %s, %s, %s)"

def insert_table(command: str, val: str):
    cnx = mysql.connector.connect(
        host="127.0.0.1",
        port=3306,
        user="root",
        password="root",
        database="banco_enderecos"
    )

    cursor = cnx.cursor()
    cursor.execute(command, val)
    cnx.commit()

    print("enviado esta porra")
    cursor.close()
    cnx.close()