function add(){
    var newTask = document.querySelector(".input").value;
    if(newTask == ""){}
    else{
        var newDiv = document.createElement('div');
        newDiv.className = 'task';
        newDiv.innerHTML = `${newTask} <i class="trash fa-solid fa-trash" onclick="remove(this)"></i> `;
        document.querySelector(".tasks").appendChild(newDiv);
    }
}

function remove(element){
    let task = element.parentElement;
    let parent = document.querySelector('.tasks');
    parent.removeChild(task);
}