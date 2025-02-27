window.onload = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('complemento').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('numero').value = '';
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