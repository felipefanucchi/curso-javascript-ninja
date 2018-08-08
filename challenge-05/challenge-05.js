/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ['felipe',null,3,true,{}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function foo(arg) {
    return arg
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
//console.log(foo(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function bar(arr, index) {
    return arr[index]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [{nome: 'felipe', profissao: 'front-end dev'}, 26, 'Felipe Kuat', undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
bar(arr2, 0);
bar(arr2, 1);
bar(arr2, 2);
bar(arr2, 3);
bar(arr2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(name) {
    var livros = {
        'Como investir na bolsa': {
            quantidadePaginas: 200,
            autor: 'Warren',
            editora: 'Editora Saraiva'
        },
        'Javascript, for beginners': {
            quantidadePaginas: 50,
            autor: 'Felipe Kuat',
            editora: 'Editora Unnamed'
        },
        'Mobile HTML5': {
            quantidadePaginas: 976,
            autor: 'Weyl',
            editora: 'O\'Reilly'
        }
    }

    if(!name) return livros;

    var livrosNomes = Object.keys(livros);
    var containsBook = livrosNomes.some(e => e === name);

    if(!containsBook) return 'Este livro nao existe em nossa livraria';

    return livros[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
//console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var jsBeginner = 'Javascript, for beginners', bolsa = 'Como investir na bolsa', html = 'Mobile HTML5';

console.log('O livro ' +jsBeginner+ ' tem '+book(jsBeginner).quantidadePaginas+ ' páginas');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor livro ' +bolsa+ ' é '+book(bolsa).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' +html+ ' foi publicado pela editora '+book(html).editora);

// Teste Para caso livro pesquisado nao exista.
console.log(book('O pestinha'));
