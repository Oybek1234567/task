const container = document.querySelector(".container")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const lists = document.querySelector("#lists")

btn.addEventListener("click", () => {
    if(!input.value){
        alert("WRITE SOMETHING!")
    }else{
        // list
        const list = document.createElement("div")
        list.classList.add("list")
        // checkbox
        const checkbox = document.createElement("input")
        checkbox.classList.add("checkbox")
        checkbox.setAttribute("type", "checkbox")
        // checkbox function
        checkbox.addEventListener("click", () => {
            text.style.textDecoration = "line-through"
    })
        // text
        const text = document.createElement("h3")
        text.classList.add("text")
        text.textContent = input.value
        // del-btn
        const delBtn = document.createElement("button")
        delBtn.classList.add("del-btn")
        delBtn.textContent = "Remove"
        // del-btn function
        delBtn.addEventListener("click", () => {
            list.style.display = "none"
        })
        // appends
        lists.appendChild(list)
        list.appendChild(checkbox)
        list.appendChild(text)
        list.appendChild(delBtn)
        container.appendChild(lists)
        input.value = ''
    }
    
    
    
})
