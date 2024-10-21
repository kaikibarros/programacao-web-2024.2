// Adicionar um botão gravar, que, ao ser pressionado, armazena os dados usando localstorage. Os dados devem estar armazenados em chaves diferentes (um para cada campo)Adicionar um botão exibir, que, ao ser pressionado, recupera os dados armazenados no localstorage e os exibe na mesma página, abaixo do formulário. 

function gravar() {
    document.getElementById("gravar").addEventListener('click', function() {
        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const fone = document.getElementById('fone').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('nome', nome);
        localStorage.setItem('endereco', endereco);
        localStorage.setItem('fone', fone);
        localStorage.setItem('email', email);
        
        console.log("Dados gravados");
    });
}         

 function exibir () {
    document.getElementById("exibir").addEventListener('click', function(){
        const nome = localStorage.getItem('nome');
        const endereco = localStorage.getItem('endereco');
        const fone = localStorage.getItem('fone');
        const email = localStorage.getItem('email');
        const outputDiv = document.getElementById('output');

 if (nome || endereco || fone || email) {
     outputDiv.textContent = `Dado armazenado:\n Nome: ${nome}\nEndereço: ${endereco}\nTelefone: ${fone}\nEmail: ${email}`; 
 } else {
    outputDiv.textContent = 'Nenhum dado encontrado.'; 
    };
})};
gravar();
exibir();

