var listaUsuario = [] //Lista Geral Usuários
var listaAnimal = [] //Lista Geral Animais
var listaAnimalAdotar = [] //Lista Animais Disponíveis para Adoção

menuPrincipal()
function menuPrincipal(){
    var menu1 = Number(prompt("Você deseja usar acessar qual sistema: \n1- Usuário \n2- Casa de Adoções de Animais \n3- Fale Conosco \n4- Fechar"))
    switch(menu1){ 
        case 1:
            var menuUsu = Number(prompt("Você deseja fazer: \n1- Cadastro \n2- Login \n3- Voltar"))

            switch(menuUsu){
                case 1:
                    cadastroUsuario()
                break;

                case 2:
                    loginUsuario()
                break;

                case 3:
                    menuPrincipal()
                break;

                default:
                    alert("Opção Inválida!")
                    menuPrincipal()
                break;
            }
        break;

        case 2:
            var senhaAdocao = prompt("Digite a senha de acesso:")

            if(senhaAdocao == "pet2021"){
                menuCasaAdocao()
            }else{
                alert("Senha incorreta!")
                menuPrincipal()
            }
        break;

        case 3:
            alert("Telefone: (75)9 4002-8922 \nInstagram: @CasadeAdoçõesFSA \nTwitter: @CasadeAdoçõesFSA \nFacebook: Casa de AdoçõesFSA")
            menuPrincipal()
        break;

        case 4:
            console.log("Até mais!")
        break;

        default:
            alert("Opção não encontrada!")
            menuPrincipal()
        break;
    }
}

function cadastroUsuario(){
    var pessoa = {
        nomeUsuario: prompt("Digite aqui seu nome:"),
        CPF: Number(prompt("Digite aqui seu CPF:")),
        telefone: Number(prompt("Digite seu telefone:")),
        rua: prompt("Digite o nome da sua rua:"),
        cidade: prompt("Digite o nome da sua cidade:"),
        estado: prompt("Digite o nome do seu estado:"),
        CEP: Number(prompt("Digite seu CEP:")),
        animalAdotado: false,
        chipAnimal: "Nenhum animal adotado!"
    }
    
    var flag = false
    for(var i = 0; i < listaUsuario.length && flag == false; i++){
        if(pessoa.CPF == listaUsuario[i].CPF){
            flag = true
            alert("Esse CPF já está cadastrado!")
            menuPrincipal()
        }
    }
    if(flag == false){
        listaUsuario.push(pessoa)
        alert("Cadastro Efetuado!")
        menuPrincipal()
    }
}

function loginUsuario() {
    var flag = false
    var acharCPF = Number(prompt("Insira aqui seu CPF:"))

    for (i = 0; i < listaUsuario.length && flag === false; i++) {
        if (acharCPF == listaUsuario[i].CPF) {
            flag = true
            alert("CPF encontrado \nBem vindo(a) " + listaUsuario[i].nomeUsuario)
            menuUsuarioPrincipal()
        }
    }
    if(flag === false) {
        alert("CPF não encontrado!")
        menuPrincipal()
    }
}

function menuUsuarioPrincipal(){
    var menuUsuario = Number(prompt("Qual opção você deseja acessar: \n1- Adotar Animal \n2- Fechar"))
    switch(menuUsuario){
        case 1:
            if(listaAnimalAdotar.length == 0){
                alert("No momento não temos nenhum animal disponível para adoção ... Desculpe.")
                menuPrincipal()
            }else{
                console.log("Lista de animais disponíveis para adoção:")
                listarAnimaisAdotar()
                adotarAnimal()
            }
        break;

        case 2:
            menuPrincipal()
        break;

        default:
            alert("Opção não encontrada!")
            menuPrincipal()
        break;
    }
}

function adotarAnimal(){
    var buscaAnimal = prompt("Digite aqui o CHIP do animal:")
    var flag = false
    for(var j = 0; j < listaAnimalAdotar.length && flag === false; j++){
        if(buscaAnimal == listaAnimalAdotar[j].chip){
            flag = true
            alert("Pet encontrado!")
            if(listaAnimalAdotar[j].situacao == "Vivo"){              
                var escolha = Number(prompt("Deseja adotá-lo? \n1- Sim \n2- Não"))
                if(escolha == 1){
                    listaUsuario[i].animalAdo = true
                    listaUsuario[i].chipAnimal = "O chip do pet adotado é: " + listaAnimal[j].chip
                    listaAnimal[j].donoCPF = "O número do CPF do dono deste pet é: " + listaUsuario[i].CPF
                    listaAnimal[j].disponivelAdotar = false
                    listaAnimalAdotar.splice(j,1)
                    alert("O pet foi adotado com sucesso!")
                    menuUsuarioPrincipal()
                }else{
                    menuUsuarioPrincipal()
                }
            }else{
                alert("O pet não está disponível para adoção.")
                menuUsuarioPrincipal()
            }
        }
    }
    if(flag == false){
        alert("Pet não encontrado!")
        menuUsuarioPrincipal()
    }
}

function menuCasaAdocao(){
    var escolhaCasa = Number(prompt("Qual serviço você deseja acessar? \n1- Cadastrar Animal no Sistema \n2- Lista de Animais(Geral) \n3- Lista de Usuários(Geral) \n4- Lista de Animais Disponíveis para Adoção \n5- Remover ou Editar Animal do Sistema \n6- Remover ou Editar Usuário do Sistema \n7- Procurar Cadastro do Animal \n8- Procurar Cadastro do Usuário \n9- Sair"))

    switch(escolhaCasa){
        case 1:
            cadastroAnimal()
            menuCasaAdocao()
        break;

        case 2:
            console.log("Lista Geral de Animais:")
            listarAnimais()
            menuCasaAdocao()
        break;

        case 3:
            console.log("Lista Geral de Usuários:")
            listarUsuarios()
            menuCasaAdocao()          
        break;

        case 4:
            console.log("Lista de Animais Disponíveis para Adoção:")
            listarAnimaisAdotar()            
            menuCasaAdocao()
        break;

        case 5:
            var acharAnimal = Number(prompt("1- Remover \n2- Editar"))
            switch(acharAnimal){
                case 1:
                    removerAnimal()
                break;

                case 2:
                    editarAnimal()
                break;

                default:
                    alert("Opção inválida!")
                    menuCasaAdocao()
                break;
            }
        break;

        case 6:
            var acharUsuario = Number(prompt("1- Remover \n2- Editar"))
            switch(acharUsuario){
                case 1:
                    removerUsuario()
                break;

                case 2:
                    editarUsuario()
                break;

                default:
                    alert("Opção inválida!")
                    menuCasaAdocao()
                break;
            }
        break;

        case 7:
            var acharAnimal = Number(prompt("Você deseja consultar esse cadastro usando: \n1- Nome \n2- CHIP"))
            switch(acharAnimal){
                case 1:
                    var buscaNomeAnimal = prompt("Digite aqui o nome do animal:")
                    var flag = false

                    for(var i = 0; i < listaAnimal.length; i++){
                        if(buscaNomeAnimal == listaAnimal[i].nomeAnimal){
                            flag = true
                            alert("Cadastro encontrado!")
                            console.log("------------------Inicio da Ficha-------------------")
                            console.log("Nome do Pet: " + listaAnimal[i].nomeAnimal)
                            console.log("Chip do Pet: " + listaAnimal[i].chip)
                            console.log("Espécie do Pet: " + listaAnimal[i].especie)
                            console.log("Raça do Pet: " + listaAnimal[i].raça)
                            console.log("Sexo do Pet: " + listaAnimal[i].sexo)
                            console.log("Idade do Pet: " + listaAnimal[i].idade)
                            console.log("Peso do Pet: " + listaAnimal[i].peso + "kg")
                            console.log("Id do Pet: " + listaAnimal[i].Id)
                            console.log("Situação do Pet: " + listaAnimal[i].situacao)
                            console.log("Disponível para adotar: " + listaAnimal[i].disponivelAdotar)
                            console.log("Dono do Pet: " + listaAnimal[i].donoCPF)
                            console.log("-------------------Fim da Ficha--------------------")                            
                            menuCasaAdocao()
                        }
                    }
                    if(flag == false){
                        alert("Ficha Inexistente!")
                        menuCasaAdocao()
                    }
                break;
            
                case 2:
                    var buscaCHIPAnimal = prompt("Digite aqui o CHIP do animal:")
                    var flag = false

                    for(var i = 0; i < listaAnimal.length && flag === false; i++){
                        if(buscaCHIPAnimal == listaAnimal[i].chip){
                            flag = true
                            alert("Cadastro encontrado!")
                            console.log("------------------Inicio da Ficha-------------------")
                            console.log("Nome do Pet: " + listaAnimal[i].nomeAnimal)
                            console.log("Chip do Pet: " + listaAnimal[i].chip)
                            console.log("Espécie do Pet: " + listaAnimal[i].especie)
                            console.log("Raça do Pet: " + listaAnimal[i].raça)
                            console.log("Sexo do Pet: " + listaAnimal[i].sexo)
                            console.log("Idade do Pet: " + listaAnimal[i].idade)
                            console.log("Peso do Pet: " + listaAnimal[i].peso + "kg")
                            console.log("Id do Pet: " + listaAnimal[i].Id)
                            console.log("Situação do Pet: " + listaAnimal[i].situacao)
                            console.log("Disponível para adotar: " + listaAnimal[i].disponivelAdotar)
                            console.log("Dono do Pet: " + listaAnimal[i].donoCPF)
                            console.log("-------------------Fim da Ficha--------------------")
                            menuCasaAdocao()
                        }
                    }
                    if(flag == false){
                        alert("Ficha Inexistente!")
                        menuCasaAdocao()
                    }
                break;

                default:
                    alert("Opção Inválida!")
                    menuCasaAdocao()
                break;
            }
        break;

        case 8:
            var escolha = Number(prompt("Você deseja consultar esse cadastro usando: \n1- Nome \n2- CPF"))
            switch(escolha){
                case 1:
                    var acharNomeUsuario = prompt("Digite aqui o nome do usuário:")
                    var flag = false

                    for(var i = 0; i < listaUsuario.length; i++){
                        if(acharNomeUsuario == listaUsuario[i].nomeUsuario){
                            flag = true
                            alert("Cadastro encontrado!")
                            console.log("------------------Inicio da Ficha-------------------")
                            console.log("Nome do Usuário: " + listaUsuario[i].nomeUsuario)
                            console.log("CPF do Usuário: " + listaUsuario[i].CPF)
                            console.log("Telefone do Usuário: " + listaUsuario[i].telefone)
                            console.log("Rua do Usuário: " + listaUsuario[i].rua)
                            console.log("Cidade do Usuário: " + listaUsuario[i].cidade)
                            console.log("Estado do Usuário: " + listaUsuario[i].estado)
                            console.log("CEP do Usuário: " + listaUsuario[i].CEP)
                            console.log("Animal adotado nesse cadastro: " + listaUsuario[i].animalAdotado)
                            console.log("Chip do Animal adotado neste cadastro: " + listaUsuario[i].chipAnimal)
                            console.log("-------------------Fim da Ficha--------------------")
                            menuCasaAdocao()
                        }
                    }
                    if(flag == false){
                        alert("Ficha Inexistente!")
                        menuCasaAdocao()
                    }
                break;

                case 2:
                    var acharCPFUsuario = Number(prompt("Digite aqui o CPF do usuário:"))
                    var flag = false

                    for(var i = 0; i < listaUsuario.length; i++){
                        if(acharCPFUsuario == listaUsuario[i].CPF){
                            flag = true
                            alert("Cadastro encontrado!")
                            console.log("------------------Inicio da Ficha-------------------")
                            console.log("Nome do Usuário: " + listaUsuario[i].nomeUsuario)
                            console.log("CPF do Usuário: " + listaUsuario[i].CPF)
                            console.log("Telefone do Usuário: " + listaUsuario[i].telefone)
                            console.log("Rua do Usuário: " + listaUsuario[i].rua)
                            console.log("Cidade do Usuário: " + listaUsuario[i].cidade)
                            console.log("Estado do Usuário: " + listaUsuario[i].estado)
                            console.log("CEP do Usuário: " + listaUsuario[i].CEP)
                            console.log("Animal adotado nesse cadastro: " + listaUsuario[i].animalAdotado)
                            console.log("Chip do Animal adotado neste cadastro: " + listaUsuario[i].chipAnimal)
                            console.log("-------------------Fim da Ficha--------------------")
                            menuCasaAdocao()                            
                        }
                    }
                    if(flag == false){
                        alert("Ficha Inexistente!")
                        menuCasaAdocao()
                    }
                break;

                default:
                    alert("Opção Inválida!")
                    menuCasaAdocao()
                break;
            }
        break;

        case 9:
            menuPrincipal()
        break;

        default:
            alert("Opção Inválida!")
            menuCasaAdocao()
        break;
    }
}

var novoId = 0
function cadastroAnimal(){
    var pet = {
        nomeAnimal: prompt("Qual o nome?"),
        chip: prompt("Qual o chip do pet?"),
        especie: prompt("Qual a espécie?"),
        raca: prompt("Qual a raça?"),
        sexo: prompt("Qual o sexo? \nMacho \nFêmea"),
        idade: Number(prompt("Qual a idade?")),
        peso: parseFloat(prompt("Qual o peso? (Kg)")),
        Id: novoId,
        situacao: prompt("Qual a situação? \nVivo \nMorto"),
        disponivelAdotar: true,
        donoCPF: "Sem dono"
    }
    novoId = novoId +1
    var flag = false
    for(var i = 0; i < listaAnimal.length && flag == false; i++){
        if(pet.chip == listaAnimal[i].chip){
            alert("CHIP já cadastrado!")
            menuCasaAdocao()
        }
    }
    if(flag == false){
        listaAnimal.push(pet)
        alert("Cadastro Efetuado!")
    }
    if(pet.disponivelAdotar == true && pet.situacao == "Vivo"){
        listaAnimalAdotar.push(pet)
        menuCasaAdocao()
    }else{
        pet.disponivelAdotar = false
        menuCasaAdocao()
    }
}

function removerAnimal(){
    var apagarAnimalCHIP = prompt("Digite aqui o CHIP do animal:")
    var flag = false

    for(var i = 0; i < listaAnimal.length && flag === false; i++){
        if(apagarAnimalCHIP == listaAnimal[i].chip){
            flag = true
            alert("Cadastro encontrado!")
            if(listaAnimal[i].disponivelAdotar == true && listaAnimal[i].situacao == "Vivo"){
                var apaga = Number(prompt("Deseja realmente apagar esse cadastro? \n1- Sim \n2- Não"))
                if(apaga == 1){
                    listaAnimal.splice(i,1)
                    listaAnimalAdotar.splice(i,1)
                    alert("Cadastro excluído!")
                    menuCasaAdocao()
                }else{
                    menuCasaAdocao()
                }
            }else{
                alert("Não foi possível concluir esta ação! \nO animal em questão já foi adotado ou está morto.")
                menuCasaAdocao()
            }
        }
    }
    if(flag == false){
        alert("Ficha Inexistente")
        menuCasaAdocao()
    }
}

function editarAnimal(){
    var buscarAnimalCHIP = prompt("Digite aqui o CHIP do animal:")
    var flag = false

    for(var i = 0; i < listaAnimal.length && flag === false; i++){
        if(buscarAnimalCHIP == listaAnimal[i].chip){
            flag = true
            var escolha = Number(prompt("Qual dado você deseja editar? \n1- Nome\n2- Idade \n3- Peso\n4- Situação(Vivo ou Morto)"))
            switch(escolha){
                case 1:
                    listaAnimal[i].nomeAnimal = prompt("Digite o novo nome desejado:")
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 2:
                    listaAnimal[i].idade = Number(prompt("Digite a idade desejado:"))
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 3:
                    listaAnimal[i].peso = parseFloat(prompt("Digite o peso desejado:"))
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 4:
                    listaAnimal[i].situacao = prompt("Digite a situação (Vivo ou Morto) desejado:")
                    if(listaAni[i].situacao == "Morto"){
                        listaAnimalAdotar.splice(i,1)
                        alert("Edição concluída!")
                        menuCasaAdocao()
                    }else{
                        menuCasaAdocao()
                    }
                break;

                default:
                    alert("Opção Inválida!")
                    menuCasaAdocao()
                break;
            }
        }
    }
    if(flag == false){
        alert("Ficha Inexistente")
        menuCasaAdocao()
    }
}

function removerUsuario(){
    var apagarUsuarioCPF = Number(prompt("Digite aqui o CPF do Usuário:"))
    var flag = false

    for(var i = 0; i < listaUsuario.length && flag === false; i++){
        if(apagarUsuarioCPF == listaUsuario[i].CPF){
            flag = true
            alert("Cadastro encontrado!")
            if(listaUsuario[i].animalAdotado == false){
                var apaga = Number(prompt("Deseja realmente apagar esse cadastro? \n1- Sim \n2- Não"))
                if(apaga == 1){
                    listaUsuario.splice(i,1)
                    alert("Cadastro excluído!")
                    menuCasaAdocao()
                }else{
                    menuCasaAdocao()
                }
            }else{
                alert("Existe um animal cadastrado neste perfil. Não foi possível removê-lo.")
                menuCasaAdocao()
            }
        }
    }
    if(flag == false){
        alert("Ficha Inexistente!")
        menuCasaAdocao()
    }
}

function editarUsuario(){
    var buscarUsuarioCPF = Number(prompt("Digite aqui o CPF do usuário:"))
    var flag = false

    for(var i = 0; i < listaUsuario.length && flag === false; i++){
        if(buscarUsuarioCPF == listaUsuario[i].CPF){
            flag = true
            var escolha = Number(prompt("Qual dado você deseja editar? \n1- Nome\n2- Telefone \n3- Rua \n4- Cidade \n5- Estado \n6- CEP"))
            switch(escolha){
                case 1:
                    listaUsuario[i].nomeUsuario = prompt("Digite o novo nome desejado:")
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 2:
                    listaUsuario[i].telefone = Number(prompt("Digite o telefone desejado:"))
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 3:
                    listaUsuario[i].rua = prompt("Digite a rua desejada:")
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 4:
                    listaUsuario[i].cidade = prompt("Digite a cidade desejada:")
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 5:
                    listaUsuario[i].estado = prompt("Digite o estado desejada:")
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                case 6:
                    listaUsuario[i].CEP = Number(prompt("Digite o CEP desejada:"))
                    alert("Edição concluída!")
                    menuCasaAdocao()
                break;

                default:
                    alert("Opção Inválida!")
                    menuCasaAdocao()
                break;
            }
        }
    }
    if(flag == false){
        alert("Ficha Inexistente")
        menuCasaAdocao()
    }
}

function listarAnimais(){
    var i = 0
    while(listaAnimal.length > i){
        console.log("------------------Inicio da Ficha-------------------")
        console.log("Nome do Pet: " + listaAnimal[i].nomeAnimal)
        console.log("Chip do Pet: " + listaAnimal[i].chip)
        console.log("Espécie do Pet: " + listaAnimal[i].especie)
        console.log("Raça do Pet: " + listaAnimal[i].raca)
        console.log("Sexo do Pet: " + listaAnimal[i].sexo)
        console.log("Idade do Pet: " + listaAnimal[i].idade)
        console.log("Peso do Pet: " + listaAnimal[i].peso + "kg")
        console.log("Id do Pet: " + listaAnimal[i].Id)
        console.log("Situação do Pet: " + listaAnimal[i].situacao)
        console.log("Disponível para adotar: " + listaAnimal[i].disponivelAdotar)
        console.log("Dono do Pet: " + listaAnimal[i].donoCPF)
        console.log("-------------------Fim da Ficha--------------------")
        i++
    }
}

function listarUsuarios(){
    var i = 0
    while(listaUsuario.length > i){
        console.log("------------------Inicio da Ficha-------------------")
        console.log("Nome do Usuário: " + listaUsuario[i].nomeUsuario)
        console.log("CPF do Usuário: " + listaUsuario[i].CPF)
        console.log("Telefone do Usuário: " + listaUsuario[i].telefone)
        console.log("Rua do Usuário: " + listaUsuario[i].rua)
        console.log("Cidade do Usuário: " + listaUsuario[i].cidade)
        console.log("Estado do Usuário: " + listaUsuario[i].estado)
        console.log("CEP do Usuário: " + listaUsuario[i].CEP)
        console.log("Animal adotado nesse cadastro: " + listaUsuario[i].animalAdotado)
        console.log("Chip do Animal adotado neste cadastro: " + listaUsuario[i].chipAnimal)
        console.log("-------------------Fim da Ficha--------------------")
        i++
    }
}

function listarAnimaisAdotar(){
    var i = 0
    while(listaAnimalAdotar.length > i){
        console.log("------------------Inicio da Ficha-------------------")
        console.log("Nome do Pet: " + listaAnimalAdotar[i].nomeAnimal)
        console.log("Chip do Pet: " + listaAnimalAdotar[i].chip)
        console.log("Espécie do Pet: " + listaAnimalAdotar[i].especie)
        console.log("Raça do Pet: " + listaAnimalAdotar[i].raca)
        console.log("Sexo do Pet: " + listaAnimalAdotar[i].sexo)
        console.log("Idade do Pet: " + listaAnimalAdotar[i].idade)
        console.log("Peso do Pet: " + listaAnimalAdotar[i].peso + "kg")
        console.log("Id do Pet: " + listaAnimalAdotar[i].Id)
        console.log("Situação do Pet: " + listaAnimalAdotar[i].situacao)
        console.log("Disponível para adotar: " + listaAnimalAdotar[i].disponivelAdotar)
        console.log("Dono do Pet: " + listaAnimalAdotar[i].donoCPF)
        console.log("-------------------Fim da Ficha--------------------")
        i++
    }
}