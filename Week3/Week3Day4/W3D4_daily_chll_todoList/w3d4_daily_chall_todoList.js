const tasks = [];
const formInput = document.getElementById('input');
const tasksBoard = document.getElementsByClassName('listTasks')[0];
function addTask(){
    const task = formInput.value;
    if(task.length > 0){
        tasks.push(task)
        document.createElement('div');
    }
}