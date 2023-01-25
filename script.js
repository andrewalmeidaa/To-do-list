document.getElementById('BtnAddLine').addEventListener('click', addItem)

let rowIndex = 0

function addItem(){
    const contentTextTodo = document.getElementById(`itemLineToDo`).value 
    const sectionToDo = document.getElementById(`listToDo`)
    
    const divItemToDo = document.createElement(`li`)
    divItemToDo.id = `divItemToDo-${rowIndex}`
    divItemToDo.className = `divItemToDo`
    

    const itemToDo = document.createElement(`p`)
    itemToDo.innerText = contentTextTodo
    // itemToDo.innerHTML = '<del>contentTextTodo</del>'
    itemToDo.id = `rowItemLine`
    itemToDo.className = `rowItemLine`

    const btnRemove = document.createElement('button')
    btnRemove.innerText = `-`
    btnRemove.id = `btnRemove`
    btnRemove.className = `btnRemove`
    btnRemove.addEventListener(`click`, ()=>{
         divItemToDo.remove()
         console.log(divItemToDo)
        //  localStorage.removeItem()
    })

    const checkboxbtn = document.createElement('input')
    checkboxbtn.type = `checkbox`
    checkboxbtn.className = `checkboxItem`
    checkboxbtn.addEventListener('click', ()=>{
        console.log(`testando`)
        itemToDo.innerHTML = `<del>${contentTextTodo}</del>`
        checkboxbtn.disabled = `true`
    })

    // localStorage.setItem(`info ${rowIndex}`, contentTextTodo)

    divItemToDo.append(checkboxbtn,itemToDo,btnRemove)
    sectionToDo.append(divItemToDo)

    rowIndex++
}
