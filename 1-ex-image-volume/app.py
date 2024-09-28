import os
from flask import Flask
import logging

# Cria uma instância da aplicação Flask
app = Flask(__name__)

# Verifica se o diretório de logs existe, caso contrário, cria-o
if not os.path.exists('/app/logs'):
    os.makedirs('/app/logs')

# Configura o registro de logs em um arquivo
logging.basicConfig(filename='/app/logs/app.log', level=logging.INFO)

# Define a rota principal da aplicação, acessível através de '/'
@app.route('/')
def hello_world():
    app.logger.info('Acesso à página inicial')
    return 'Hello, Docker with logs!'

# Verifica se o script está sendo executado diretamente e inicia o servidor na porta 5000
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)