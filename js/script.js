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

function setItemDB() {
    if (itensDB.length >= 20) {
        alert('Limite máximo de 20 itens atingido!')
        return
    }

    itensDB.push({'item':texto.value, 'status': ''})
    updateDB()
}
function updateDB() {
    localStorage.setItem('todolist', JSON.stringify(itensDB))
    loadItens()
}
function loadItens() {
    ul.innerHTML = "";
    itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
    itensDB.forEach((item, i) => {
        insertItemTela(item.item, item.status, i)
    })
}
function insertItemTela(text, status, i) {
    const li = document.createElement('li')

    li.innerHTML = `
    <div class="divLi">
        <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i})" />
        <span data-si=${i}>${text}</span>
        <button onclick="removeItem(${i})" data-i=${i}>x</>
    </div>
    `
    ul.appendChild(li)

    if (status) {
        document.querySelector(`[data-si="${i}"]`).classList.add('linha')
    }else {
        document.querySelector(`[data-si="${i}"]`).classList.remove('linha')
    }
    texto.value = ''
}

function done(chk, i) {
    if (chk.checked) {
        itensDB[i].status = 'checked'
    }else {
        itensDB[i].status = ''
    }

    updateDB()
}

function removeItem(i) {
    itensDB.splice(i, 1)
    updateDB()
}
deletaTudo.onclick = () => {
    itensDB = []
    updateDB()
}

loadItens()