

 var inp = document.getElementById('inp')

 function check() {
   

    if (inp.value == '') {
        alert('Empty Task? ')
    }
    else{
        add()
    }
}


 function add() {
    var list = document.getElementById('list')
    var div = document.createElement('div')
    // var inp = document.getElementById('inp')
    // var list = document.getElementById('list')
    // var h3 = document.createElement('h3')
    // var div = document.createElement('div')
    // var h3text = document.createTextNode(inp.value)

    list.appendChild(div)
    div.setAttribute('class', 'card')
    // div.appendChild(h3)
    // h3.appendChild(h3text)

    var reBtn = document.createElement('button')
    div.appendChild(reBtn)
    reBtn.innerHTML = 'Remove'
    reBtn.setAttribute('class', 'Btnn')

    reBtn.onclick = function () {
        reBtn.parentNode.remove()
    }


    var editBtn = document.createElement('button')
    div.appendChild(editBtn)
    editBtn.innerHTML = 'Edit'
    editBtn.setAttribute('class', 'Btnn')


    var press = true
    var prev = ""
    var input2 = document.createElement('input')
    var text = document.createTextNode(input2)
    div.appendChild(input2)
    div.insertBefore(input2, div.childNodes[0])
    input2.value = inp.value
    // h3.remove()
    input2.disabled = press
    editBtn.onclick = function () {

        if (press) {
            
            prev = input2.value
            editBtn.innerHTML = "Update"
            press = false
            input2.disabled = press
            input2.focus()
            input2.onblur = function () {
                if (input2.value === "") {
                    input2.value = prev
                }
                editBtn.innerHTML = "Edit"
                press = true
                input2.disabled = press
            }
        }
        else {
            if (input2.value === "") {
                input2.value = prev
            }
            editBtn.innerHTML = "Edit"
            press = true
            input2.disabled = press
        }
    }

    inp.value = ""
}



function press() {
   

    if (event.keyCode == 13) {
        document.getElementById("addBtn").click()
    }

}



const del = () =>{
    let list = document.getElementById('list')
list.innerHTML = ""

}
inp.focus()



