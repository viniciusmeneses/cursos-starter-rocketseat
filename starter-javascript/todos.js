const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

const todos = JSON.parse(localStorage.getItem('listTodos')) || []

function renderTodos() {
    listElement.innerHTML = ''

    todos.forEach(todo => {
        const todoElement = document.createElement('li')
        const todoText = document.createTextNode(todo)

        const linkElement = document.createElement('a')
        const linkText = document.createTextNode('Excluir')
        linkElement.setAttribute('href', '#')
        linkElement.appendChild(linkText)
        linkElement.onclick = () => {
            deleteTodo(todos.indexOf(todo))
        }

        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement)
    })
}

function addTodo() {
    const todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('listTodos', JSON.stringify(todos))
}

buttonElement.onclick = addTodo
renderTodos()
