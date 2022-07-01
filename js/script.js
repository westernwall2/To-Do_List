const deletaTudo = document.getElementById('limpar')
const texto = document.getElementById('tarefa')
const inserir = document.getElementById('add')
const ul = document.querySelector('ul')

var itensDB = []

inserir.onclick = () => {
    if(texto.value != '') {
        setItemDB()
    }else{
        alert('Digite Algo!')
    }
}