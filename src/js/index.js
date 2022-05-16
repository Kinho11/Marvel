const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', ()=>{
        const idSelecionado = personagem.attributes.id.value

        if(idSelecionado === 'ultron' ) return

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')


        personagem.classList.add('selecionado')

        const imagem = document.querySelector('#personagem-jogador-1')

        const nome = document.querySelector('#nome-jogador-1')

        const nomeSelecionado = personagem.getAttribute('data-name')

        imagem.src = `./src/imagens/${idSelecionado}.png`

        nome.innerHTML = `${nomeSelecionado}`

            
        })


    
})



// function thor(){
//     let nome = document.querySelector('#name')
//     let imagem = document.querySelector('#personagem-jogador-1')
    
    
//     nome.innerHTML = 'Thor'
//     imagem.src = './src/imagens/thor.png'
// }