const selecionarprodutos = function (opção){

switch (opção) {
    case 'uva':
        document.getElementById("produto").innerText="opção selecionada é uva"
        
        break;
    case 'laranja':
        document.getElementById("produto").innerText="opção selecionada é laranja"
       
        break;
    case'maça':
     document.getElementById("produto").innerText="opção selecionada é maça"
       
        break;
    case'banana':
    document.getElementById("produto").innerText="opção selecionada é banana"
       
        break;
    default:
        document.getElementById("produto").innerText="opção selecionada é invalida"
       
        break;
    }
}