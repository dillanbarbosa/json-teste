function cafe(){
    fetch('robson.json')
    .then(response => response.json())
    .then(dadinho =>{
        document.getElementById('destino').innerText =
        " Nome: " + dadinho.nome

    })
}