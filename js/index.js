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

    document.addEventListener("click", function(e){
        if(e.target.className == 'remover'){
          var id = e.target.getAttribute('data-id');

          document.getElementById(id).remove();
        }
    });

    function adicionarTarefa() {
        var tarefa = document.getElementById('tarefa').value;
    
        var id = 'tarefa-' + Date.now();

        var registro = `<li id="${id}">${tarefa} <button class="remover" data-id="${id}" class="btn-remover">X</button></li>`;
    
        var lista = document.querySelector('#listaTarefa > ul');

        console.log(lista);
    
        lista.innerHTML = lista.innerHTML + registro;
    }
    
    function removerTarefa(idTarefa) {
    
        document.getElementById(idTarefa).remove();
    
    }
}
