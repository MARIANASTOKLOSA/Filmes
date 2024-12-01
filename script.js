document.addEventList('DOMContentloaded' , () => {
    const filmes = [
        { id: 1, titulo: 'Filme 1', descricao: 'Descrição do Filme 1' },
        { id: 2, titulo: 'Filme 2', descricao: 'Descrição do Filme 2' },
        { id: 3, titulo: 'Filme 3', descricao: 'Descrição do Filme 3' } 
 ];

    const listaFilmes = document.getElementById('lista-filmes');

    if (listaFilmes) {
        filmes,forEach(filme => {
            const li = document.createElement('li');
            li.textContent = `${filme.titulo} - ${filme.descricao}`;
            listaFilmes.appendChild(li);
        });
     }
});  
