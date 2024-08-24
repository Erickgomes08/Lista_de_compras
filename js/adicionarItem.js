import { criarItemDaLista } from "/js/criarItemDaLista.js";
import { verificarListaVazia } from "/js/verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) {
    evento.preventDefault()

     const itemDaLista = criarItemDaLista(item.value);
     listaDeCompras.appendChild(itemDaLista);
     verificarListaVazia(listaDeCompras);
}