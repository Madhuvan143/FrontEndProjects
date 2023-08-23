function todolist(){
    let item = document.getElementById("input-text").value;//retrieves the value entered in the input text field and assigns it to the item variable.
    if(item!=""){
    let listItem = document.createElement("li");//creates a new list item element (<li>) and assigns it to the listItem variable.
    listItem.textContent = item;//sets the text content of the list item to the value of the item variable.
    let deleteButton = document.createElement("button");//creates a new button element (<button>) and assigns it to the deleteButton variable.
    deleteButton.innerHTML = '<i class="bi bi-trash"></i>';//sets the inner HTML of the delete button to include a trash icon from the Bootstrap Icons library.
    deleteButton.onclick = function() {
    listItem.remove();
    };// attaches an onclick event handler to the delete button. When clicked, it removes the corresponding list item from the list.
    listItem.classList.add("list-item");//Add custom class to the list item
    deleteButton.classList.add("delete-button");// Add custom class to delete button
    listItem.appendChild(deleteButton);    //appends the delete button as a child element of the list item.
    document.getElementById("todolist").appendChild(listItem);// appends the list item as a child element of the <ul> element with the ID "todolist".
    document.getElementById("input-text").value = "";//resets the value of the input text field to an empty string, clearing it after adding a to-do item.
}
else{
    alert("Please enter a task before adding.");
}
}