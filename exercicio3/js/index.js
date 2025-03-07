window.onload = () => {
    getCategories();
};


function getJoker() {
    var url = 'https://api.chucknorris.io/jokes/random?category=';

    var categorie = document.getElementById('select-categories').value;

    if (categorie != '') {
        fetch(`${url}${categorie}`)
            .then((response) => response.json())
            .then((dados) => {
                document.getElementById("joker").innerHTML = `<span>${dados['value']}</span>`;
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