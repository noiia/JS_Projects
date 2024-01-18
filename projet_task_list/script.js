var addNewToDo = document.getElementById('addToDo');
var toDoContainer = document.getElementById('ToDoContainer');
var inputField = document.getElementById('inputField');
var clickedBlock= false;

function addToDoBlock(){
    if(inputField.value != ""){
        var paragraph = document.createElement('p')
        paragraph.innerText = inputField.value;
        paragraph.classList.add('paragraphe_style');
        toDoContainer.appendChild(paragraph);
        inputField.value = "";
    }
};

function removeToDo(paragraph){
    if (clickedBlock == true){
        toDoContainer.removeChild(paragraph);
    }
};

addNewToDo.onclick = function(){
    addToDoBlock();
};
function toDoContainerSelected() {
    toDoContainer.addEventListener('dblclick', function(event){
        var clickedPara = event.target;
        console.log("clicked on " + clickedPara.innerText);
        return clickedPara;
    });
}


inputField.addEventListener('keydown', function(event){
    if (event.key == 'Enter'){
        addToDoBlock();
    }
    else if (event.key == "Delete"){
        var selectedTask = toDoContainerSelected();
        alert("vous avez sélectionné la ligne" + selectedTask)
        removeToDo(selectedTask);
    }
});


