// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
// Remove elementos da ul
let listaFilmes = document.querySelectorAll('#movies > ul > li');
for (let item of listaFilmes) {
  item.remove();
}
