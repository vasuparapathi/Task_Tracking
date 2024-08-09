document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = [];

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            const taskText = document.createElement('span');
            taskText.textContent = task;
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1);
                renderTasks();
            });

            editBtn.addEventListener('click', () => {
                const newTask = prompt('Edit Task', task);
                if (newTask) {
                    tasks[index] = newTask;
                    renderTasks();
                }
            });

            li.appendChild(taskText);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    };

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }
    });
});
