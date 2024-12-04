from flask import Flask, render_template
from componentes.filme import lista_filmes

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/filmes')
def filmes():
    filmes = lista_filmes()
    return render_template('filmes.html', filmes=filmes)

@app.route('/contato')
def contato():
    return render_template('contato.html')

if __name__ == "__main__":
    app.run(debug=True)
