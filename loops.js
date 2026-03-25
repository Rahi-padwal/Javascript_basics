//for loop
for(let i =0; i <= 10; i++){
    console.log(i);
}

//while
let j = 10
while(j > 0){
    console.log(j);
    j--;
}

const todo = [
    {id: 1,
    task: "Buy groceries",
    completed: false
    },
    {id: 2,
    task: "Walk the dog",
    completed: true
    },
    {id: 3,
    task: "Finish homework",
    completed: false
    }
]

//accessing the tasks using for loop
for(let k = 0; k <todo.length; k++){
    console.log(todo[k].task);
}

//for of loop
for(let l of todo){
    console.log(l.id);
}


console.log("Using High Order Array Methods");
console.log("1. forEach:");
//forEach:
todo.forEach(function(i){
    console.log(i.task);
});


console.log("2. map:");
//map:
const todoTask = todo.map(function(i){
    return i.task;
});
console.log(todoTask);


console.log("3. filter:");
//filter:
const completedTodos = todo.filter(function(i){
    return i.completed === false;
});
console.log(completedTodos);






