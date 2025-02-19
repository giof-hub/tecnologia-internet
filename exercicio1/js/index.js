function mudarCor() {
    document.querySelector('p').style.color = '#a3f4e8';
}

window.onload = function(){

    document.getElementById('formExercicio').addEventListener('submit', function(evt){
        evt.preventDefault();
        
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var dataNascimento = document.getElementById('dataNascimento').value;

        if (nome == null || nome == undefined || nome == '') {
            alert('Nome é um campo obrigatório');
            return;
        }

        if (email == null || email == undefined || email == '') {
            alert('E-mail é um campo obrigatório');
            return;
        }

        if (dataNascimento == null || dataNascimento == undefined || dataNascimento == '') {
            alert('Data de nascimento é um campo obrigatório');
            return;
        }
    });

    document.getElementById('formTarefa').addEventListener('submit', function(evt){
        evt.preventDefault();

        adicionarTarefa();
    });

    function adicionarTarefa() {
        var tarefa = document.getElementById('tarefa').value;

        var registro = `<li>${tarefa} <button class="remover" onclick="this.parentNode.remove()" class="btn-remover">X</button></li>`;
    
        var lista = document.querySelector('#listaTarefa > ul');
    
        lista.innerHTML = lista.innerHTML + registro;
    }
}
