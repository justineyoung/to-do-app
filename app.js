function onReady() {
  //declare id variable
  // let toDoId = 0;

  //"toDos" is our array
  const toDos = [];

  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';

      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        //creates delete button
        // const destroy = document.createElement('button');
        //creates "delete" text inside said button
        // destroy.textContent = "Delete";

        newLi.textContent = toDo.title;

        newLi.appendChild(checkbox);
        toDoList.appendChild(newLi);

        //adds delete button to each list
        // newLi.appendChild(destroy);
      });

    };

  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value){ return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      //#2, store value of id variable
      // id: toDoId.value,
      // id = id + 1;
    });
    newToDoText.value = '';

    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); //this prevents page from reloading
    createNewToDo();
  });

  //create event listener to delete item
  // destroy.addEventListener('click', function(event){
  //   toDoList.removeChild(this.parentElement);
  //   toDoList.filter()

    //remove to do from "ToDos" array, comparing toDo.id with id of each item
    //when delete button is clicked using the .filter() array method
  //
  //   renderTheUI();
  // })

  renderTheUI();
}

window.onload = function() {
  onReady();
};
