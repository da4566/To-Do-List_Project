let task =document.getElementById("task");
function clearInputField(){
    task.value ="";
}

function addTask() {
    let mainDiv =document.getElementById("div-main");
    let paragraph =document.createElement("p");
    paragraph.classList.add('p');

    let newDiv =document.createElement("div");
    newDiv.classList.add('divproperties');
     
    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox1');

    let label =document.createElement("label");
    label.textContent = task.value ;
    
    checkbox.onclick = function(){
        if(checkbox.checked){
            let complete = document.createElement('p');
            complete.classList.add('completetext')
            let comp_text =document.createTextNode("Completed");
            
            label.style.textDecoration = 'line-through';
            checkbox.style.display ='none';
            editButton.remove();
            
            complete.appendChild(comp_text);
            newDiv.appendChild(complete);
            newDiv.style.marginLeft ='20px';
        }
    }
    
    let editButton =document.createElement("button");
    editButton.classList.add('Button' , 'editbutton');
    editButton.onclick = function (){
        task.value =label.textContent;
        task.focus();
        newDiv.remove();
    };
    
    let editicon = document.createElement("img");
    editicon.src ="edit-icon.png";
    editicon.classList.add("img");
    
    let deleteButton =document.createElement("button");
    deleteButton.classList.add('Button');
    deleteButton.onclick =function(){
        newDiv.remove();
    }
    
    let del_icon = document.createElement("img");
    del_icon.src ="del-icon.png";
    del_icon.classList.add("img");
    
    
    paragraph.appendChild(checkbox);
    paragraph.appendChild(label);
    editButton.appendChild(editicon);
    deleteButton.appendChild(del_icon);
    newDiv.appendChild(paragraph);
    newDiv.appendChild(editButton);
    newDiv.appendChild(deleteButton);
    mainDiv.appendChild(newDiv);
}
