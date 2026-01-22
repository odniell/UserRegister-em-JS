let inputNome = document.querySelector('#inputName');
let inputIdade = document.querySelector('#inputIdade');
let inputCPF = document.querySelector('#inputCPF');
let btnCadastrar = document.querySelector('#btnCadastrar');

let msg = document.querySelector('.msg');


btnCadastrar.addEventListener('click', () => {
    
    if(inputNome.value === "" || inputIdade.value === "" || inputCPF.value === ""){
        alert('Todos os campos devem ser preenchidos')
    
    
    }  if (inputCPF.value.length == 11 && inputCPF.value == Number(inputCPF.value) ){
    
            const newUser = {
                nome: inputNome.value,
                idade: inputIdade.value,
                cpf: inputCPF.value
            }
    
            let boxUser = document.createElement('div')
            let exibirNome = document.createElement('h3')
            let exibirIdade = document.createElement('p')
            let exibirCPF = document.createElement('p')

            exibirNome.innerHTML = newUser.nome
            exibirIdade.innerHTML = newUser.idade
            exibirCPF.innerHTML = newUser.cpf

            exibirIdade.id = 'idade'
            exibirCPF.id = 'cpf'

        

            boxUser.classList.add('boxUser')
        

            let btnRemover = document.createElement('button')
            btnRemover.innerText = `Remove`
        
            btnRemover.addEventListener('click', function() {
                boxUser.remove()
            })


            boxUser.appendChild(exibirNome)
            boxUser.appendChild(exibirIdade)
            boxUser.appendChild(exibirCPF)
            msg.appendChild(boxUser)
            boxUser.appendChild(btnRemover)
        

            inputNome.value = ""
            inputIdade.value = ""
            inputCPF.value = ""
    
    }   else{
            alert('O CPF necessita ter 11 caracteres!')
        } 
    
})