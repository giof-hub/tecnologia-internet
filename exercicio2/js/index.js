function buscarCep() {
    //https://viacep.com.br/ws/72870344/json/

    var url = 'https://viacep.com.br/ws/';

    var cep = document.getElementById('inputCep').value;

    if (cep != '') {
        fetch(`${url}${cep}/json`)
            .then((response) => response.json())
            .then((dados) => {
                document.getElementById('cep').innerHTML = dados.cep;
                document.getElementById('logradouro').innerHTML = dados.logradouro;
                document.getElementById('complemento').innerHTML = dados.complemento;
                document.getElementById('unidade').innerHTML = dados.unidade;
                document.getElementById('bairro').innerHTML = dados.bairro;
                document.getElementById('localidade').innerHTML = dados.localidade;
                document.getElementById('uf').innerHTML = dados.uf;
                document.getElementById('estado').innerHTML = dados.estado;
                document.getElementById('regiao').innerHTML = dados.regiao;
                document.getElementById('ibge').innerHTML = dados.ibge;
                document.getElementById('gia').innerHTML = dados.gia;
                document.getElementById('ddd').innerHTML = dados.ddd;
            })
            .catch((error) => alert(`Houve um erro na requisição: ${error}`));
    } else {
        alert("Digite um CEP válido");
    }
}