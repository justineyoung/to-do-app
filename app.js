function onReady() {
  //declare id variable
  let id = 0;

  //"toDos" is our array
  let toDos = [];

  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');
      toDoList.textContent = '';

      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        //creates delete button
        const destroy = document.createElement('button');
        //creates "delete" text inside said button
        destroy.textContent = "Delete";

        destroy.addEventListener('click', event => {
          toDos = toDos.filter(function(a){
            return a.id !== toDo.id;
          })
          renderTheUI();
        });

        newLi.textContent = toDo.title;

        newLi.appendChild(checkbox);
        toDoList.appendChild(newLi);

        //adds delete button to each list
        newLi.appendChild(destroy);
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
      id: id,
    });

    id++;
    newToDoText.value = '';

    renderTheUI();
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault(); //this prevents page from reloading
    createNewToDo();
  });

  renderTheUI();
};

window.onload = function() {
  onReady();
};
