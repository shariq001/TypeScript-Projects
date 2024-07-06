import inquirer from "inquirer"

let todos: string [] = [];
let cond = true;

while(cond) {


let ans = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select an Operation",
        choices: ["Add", "Update", "View", "Delete" ,"Exit"]
    }
]);
    if (ans.select === "Add") {
        let addtodo = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "Add items in the list",
                validate: function(input) {
                    if (input.trim() == "") {
                        return "Please enter a valid Item"
                    }
                    return true;
                }
            }]);
            if (addtodo.todo.trim() !== "") {
        todos.push(addtodo.todo)
        todos.forEach(todo => console.log(todo));
    }
    }
    if (ans.select === "Update") {
        let updatetodo = await inquirer.prompt([{
            name: "todo",
            type: "list",
            message: "Update items in the list",
            choices: todos.map(item => item)
        }]);
        let addtodo = await inquirer.prompt([{
            name: "todo",
            type: "input",
            message: "Add items in the list"
        }]);
        let newTodo = todos.filter(val => val != updatetodo.todo);
        todos = [...newTodo,addtodo.todo]
        todos.forEach(todo => console.log(todo));
    }   
    if (ans.select === "View") {
        console.log("Your Current To-Do List:");
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Delete") {
        let deletetodo = await inquirer.prompt([{
            name: "todo",
            type: "list",
            message: "Select items in the list to Delete",
            choices: todos.map(item => item)
        }]);
        let newTodo = todos.filter(val => val != deletetodo.todo);
        todos = [...newTodo]
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select === "Exit") {
        console.log("Exiting Program");
        cond = false
    }
}




