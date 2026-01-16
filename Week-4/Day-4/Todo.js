    var tasks = [];
        
        window.onload = function() {
            loadTasks();
            displayTasks();
        }
        
        function loadTasks() {
            var savedTasks = localStorage.getItem('myTasks');
            if (savedTasks) {
                tasks = JSON.parse(savedTasks);
            }
        }
        
        function saveTasks() {
            localStorage.setItem('myTasks', JSON.stringify(tasks));
        }
        
        function addTask() {
            var taskText = document.getElementById('taskInput').value;
            var taskDate = document.getElementById('dateInput').value;
            
            if (taskText == '') {
                alert('Please enter a task!');
                return;
            }
            
            var newTask = {
                id: Date.now(),
                text: taskText,
                date: taskDate,
                completed: false
            };
            
            tasks.push(newTask);
            saveTasks();
            
            document.getElementById('taskInput').value = '';
            document.getElementById('dateInput').value = '';
            
            displayTasks();
        }
        
        function toggleTask(id) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id == id) {
                    tasks[i].completed = !tasks[i].completed;
                    break;
                }
            }
            saveTasks();
            displayTasks();
        }
        
        function deleteTask(id) {
            var newTasks = [];
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id != id) {
                    newTasks.push(tasks[i]);
                }
            }
            tasks = newTasks;
            saveTasks();
            displayTasks();
        }
        
        function displayTasks() {
            var pendingHTML = '';
            var completedHTML = '';
            
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var taskHTML = '<div class="task-item">';
                taskHTML += '<input type="checkbox" class="checkbox" ';
                taskHTML += 'onchange="toggleTask(' + task.id + ')" ';
                if (task.completed) {
                    taskHTML += 'checked';
                }
                taskHTML += '>';
                taskHTML += '<span class="task-text">' + task.text + '</span>';
                if (task.date) {
                    taskHTML += '<span class="task-date">Due: ' + task.date + '</span>';
                }
                taskHTML += '<button class="delete-btn" onclick="deleteTask(' + task.id + ')">Delete</button>';
                taskHTML += '</div>';
                
                if (task.completed) {
                    completedHTML += taskHTML;
                } else {
                    pendingHTML += taskHTML;
                }
            }
            
            document.getElementById('pendingList').innerHTML = pendingHTML;
            document.getElementById('completedList').innerHTML = completedHTML;
            
            if (pendingHTML == '') {
                document.getElementById('pendingList').innerHTML = '<p>No pending tasks!</p>';
            }
            if (completedHTML == '') {
                document.getElementById('completedList').innerHTML = '<p>No completed tasks yet.</p>';
            }
        }
 