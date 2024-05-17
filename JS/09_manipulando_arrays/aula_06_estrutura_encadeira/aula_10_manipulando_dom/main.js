document.title = 'loja de tênis';

let artigo = document.createElement('article');

document.body.appendChild(artigo)

let titulo = document.createElement('h1');
titulo.innerHTML = 'vendas de camisetas';
artigo.appendChild(titulo);

let paragrafo = document.createElement('p');
paragrafo.innerHTML = 'camiseta de times tailândesas';
artigo.appendChild(paragrafo);
paragrafo.style.fontSize = '2em';

let sessão = document.createElement('sessão');
paragrafo.innerHTML = 'loja de tênis';
artigo.appendChild(paragrafo);
paragrafo.style.fontSize = '3em';


