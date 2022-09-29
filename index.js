//Criando as variáveis iniciais

let marca = document.querySelector("#marca")
let produto = document.querySelector("#name")
let codigo = document.querySelector("#number")
let preco = document.querySelector("#preco")
let conteudo3 = 0;

//Criando funções

    function addProduto(){

//Variaveis para controle dos valores do formulario

            let conteudo1 = marca.value
            console.log(conteudo1)
        
            let conteudo2 = produto.value
            console.log(conteudo2)
        
            conteudo3 = codigo.value
            console.log(conteudo3)
        
            let conteudo4 = preco.value
            console.log(conteudo4)
        
            var venda = {
                marca1: conteudo1,
                produto1: conteudo2,
                codigo1: conteudo3,
                preco1: conteudo4
            }
        

    //Decisão para cada marca vai

            if(conteudo1 == "Swift"){
                let swift = document.querySelector("#lista-swift")
                swift.innerHTML += `<li id="${venda.codigo1}">${venda.marca1}/${venda.produto1}/${venda.codigo1}/${venda.preco1}</li>`

                cliquei = false
            }else{
                if(conteudo1 == "Seara"){
                    let seara = document.querySelector("#lista-seara")
                    seara.innerHTML += `<li id="${venda.codigo1}">${venda.marca1}/${venda.produto1}/${venda.codigo1}/${venda.preco1}</li>`
                    cliquei = false
                }else{
                    if(conteudo1 == "Friboi"){
                        let friboi = document.querySelector("#lista-friboi")
                        friboi.innerHTML += `<li "${venda.codigo1}">${venda.marca1}/${venda.produto1}/${venda.codigo1}/${venda.preco1}</li>`
                        cliquei = false
                    }
                }
            }
    }
    



    //função para remover produto

 function removeProduto(){

    let remover = document.querySelector("#codigo_remover")
    let codigo = remover.value

    console.log(codigo)
    
    if(conteudo3 == codigo){
        let excluido = document.getElementById(`${codigo}`)
        console.log(excluido)
        excluido.remove()
    }
 }