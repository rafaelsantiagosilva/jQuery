$(document).ready(() => {
     $("*"); // Todos os elementos
     $(this); // O elemento atual no HTML
     $("p.<nome da classe>"); // O parágrafo com determinada classe 
     $("p#<nome do ID>"); // O parágrafo com determinado ID
     $("p:first"); // O primeiro parágrafo do documento
     $("ul li:first"); // O primeiro <li> do primeiro <ul>
     $("ul li:first-child"); // O primeiro <li> de todos os <ul>s
     $("[href]"); // Todos os elementos com um atributo href
     $("a[target!='_blank'"); // Todos os links com o target diferente de _blank
     $(":button"); // Todos os botões e todos os <input type="button">
     $("tr:even"); // Todos os <tr> par
     $("tr:odd"); // Todos os <tr> ímpar
});