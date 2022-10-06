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
    const li = document.createElement('li')
    li.innerHTML = `<li id="${venda.codigo1}">${venda.marca1}/${venda.produto1}/${venda.codigo1}/${venda.preco1}</li>`


            prod = document.getElementById(conteudo3)
        
            if(prod != null){
            alert("Esse código já existe!")
            }else{

            var sim = confirm("Deseja realmente adicionar esse produto?")

            if(sim == true){

            if(conteudo1 == "Swift"){

                let swift = document.querySelector("#lista-swift")
                swift.appendChild(li)

                marca.value = ""
                produto.value = ""
                codigo.value = ""
                preco.value = ""
                
            }else{
                if(conteudo1 == "Seara"){
                    let seara = document.querySelector("#lista-seara")
                    seara.appendChild(li)

                    marca.value = ""
                    produto.value = ""
                    codigo.value = ""
                    preco.value = ""
                }else{
                    if(conteudo1 == "Friboi"){
                        let friboi = document.querySelector("#lista-friboi")
                        friboi.appendChild(li)

                        marca.value = ""
                        produto.value = ""
                        codigo.value = ""
                        preco.value = ""
                    }
                }
            }
        }
    }
    }
    



    //função para remover produto

 function removeProduto(){

    var sim2 = confirm("Deseja realmente remover esse produto?")

    let remover = document.querySelector("#codigo_remover")
    let codigo = remover.value
    console.log(codigo)

    if(sim2 == true){
        let prod = document.getElementById(codigo)
        prod.remove()
    }

 }
