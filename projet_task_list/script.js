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
    toDoContainer.addEventListener('rightclick', function(event){
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

var onDisplay = false;
document.addEventListener('contextmenu', function(event) {
    // Annuler l'événement par défaut (le menu contextuel par défaut ne s'affichera pas)
    event.preventDefault();

    // Afficher un menu contextuel personnalisé à la place
    showCustomContextMenu(event.clientX, event.clientY);
});

function showCustomContextMenu(x, y) {
    if (!onDisplay){
        onDisplay = true;

        var customContextMenu = document.createElement('div');

        if (toDoContainerSelected()){
            customContextMenu.innerHTML = '<ul class="customContextMenu"><li><button type = "button"> Modifier </button> </li><li><button type = "button"> Supprimer </button></li></ul>';
        }else {
            customContextMenu.innerHTML = '<ul class="customContextMenu"><li><button type = "button">Nouvelle Liste</button></li><li><button type = "button">Changer les couleurs du fond</button></li></ul>';
        }

        customContextMenu.style.position = 'absolute';
        customContextMenu.style.left = x + 'px';
        customContextMenu.style.top = y + 'px';
        customContextMenu.style.backgroundColor = '#fff';
        customContextMenu.style.border = '1px solid #ccc';
        customContextMenu.style.borderRadius = '5px';
        customContextMenu.style.padding = '10px';
        customContextMenu.style.color = '#000000';
        document.addEventListener('pointerOnText', function(event){
            
        });

        
        document.body.appendChild(customContextMenu);
        
        // Ajoutez des gestionnaires d'événements pour le menu contextuel personnalisé (par exemple, pour gérer les clics sur les options)
        
        customContextMenu.addEventListener('click', function(event) {
            // Ajoutez votre logique pour gérer les clics sur les options du menu contextuel
            console.log('Option clicked: ' + event.target.innerText);
            
            // Supprimez le menu contextuel personnalisé après le clic
            document.body.removeChild(customContextMenu);
            onDisplay = false;
        });
    }
}
