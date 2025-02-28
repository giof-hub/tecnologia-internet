window.onload = () => {
    getCategories();
};


function buscarCep() {
    var url = 'https://viacep.com.br/ws/';

    var cep = document.getElementById('inputCep').value;

    if (cep != '') {
        fetch(`${url}${cep}/json`)
            .then((response) => response.json())
            .then((dados) => {
                document.getElementById('logradouro').value = dados.logradouro;
                document.getElementById('complemento').value = dados.complemento;
                document.getElementById('bairro').value = dados.bairro;
                document.getElementById('cidade').value = dados.localidade;
                document.getElementById('estado').value = dados.estado;
            })
            .catch((error) => alert(`Houve um erro na requisição: ${error}`));
    } else {
        alert("Digite um CEP válido");
    }
}

function getCategories() {
    var url = 'https://api.chucknorris.io/jokes/categories';

    fetch(url)
        .then((response) => response.json())
        .then((dados) => {
            if (dados != null) {

                var select = document.getElementById('select-categories');

                for (var i = 0; i < dados.length; i++) {
                    select.innerHTML += `<option value="${dados[i]}">${dados[i]}</option>`;
                }
            }
        })
        .catch((error) => alert(`Houve um erro na requisição: ${error}`));
}