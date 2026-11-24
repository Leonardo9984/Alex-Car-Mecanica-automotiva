const botaoCopia = document.getElementById('botao-copiar');
const cardOculto = document.getElementById('card-oculto');
const overlay = document.getElementById('overlay');
const botaoSair = document.getElementById('botao__fechar');

botaoCopia.addEventListener('click', (evento) => {
    evento.preventDefault();
    const textoCopiado = "+55 (11) 99999-9999";
    navigator.clipboard.writeText(textoCopiado).then(function () {
        cardOculto.style.display = 'block';
        overlay.style.display = 'block';
    }).catch((erro) => {
        console.error("erro ao copiar: ", erro);
    })
})
botaoSair.addEventListener('click', () => {
    cardOculto.style.display = 'none';
    overlay.style.display = 'none';

})
overlay.addEventListener('click', ()=>{
    cardOculto.style.display = 'none';
    overlay.style.display = 'none';
})
