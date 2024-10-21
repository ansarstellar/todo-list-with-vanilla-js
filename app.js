document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value;
    
        if (taskText === '') return;
    
        // Create a new list item
        const newTask = document.createElement('li');
        newTask.classList.add('task');
    
        // Add task text inside a span
        const taskSpan = document.createElement('span');
        taskSpan.classList.add('task-text');
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskSpan.appendChild(taskContent);
    

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');

        taskSpan.appendChild(editButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
    
        // Append taskSpan and deleteButton to the list item
        newTask.appendChild(taskSpan);
        newTask.appendChild(deleteButton);
        todoList.appendChild(newTask);
    
        todoInput.value = '';
    
        // Add task complete toggle on the span, not the entire li
        taskContent.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });

        editButton.addEventListener('click', () => {
            if (editButton.textContent === 'Edit') {
                // todoInput.value = taskContent.textContent;
                // Change the task text into an input field to edit the content
                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = taskContent.textContent;
                inputField.classList.add("edit-input");
                taskSpan.replaceChild(inputField, taskContent);
                editButton.textContent = 'Save';
            } else {
                if(taskSpan.querySelector('input').value === "") {
                    console.log("IDI nahuy");
                    newTask.remove();
                }
                // Save the edited content back to the span
                const updatedText = taskSpan.querySelector('input').value;
                taskContent.textContent = updatedText;
                taskSpan.replaceChild(taskContent, taskSpan.querySelector('input'));
                editButton.textContent = 'Edit';
            }
        });
    
        // Add delete functionality
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            newTask.remove();
        });
    });
    
});
