class Todo{
	constructor(){
		this.todo = []
	}

	addTodo(newTodo){
		this.todo.push(newTodo)
	}

	removeTodo(index){
		this.todo.splice(index-1, 1);
	}

	updateTodo(index, updatedTodo){
		this.todo[index - 1] = updatedTodo;
	}

	getAllTodos(){
		if(this.todo.length > 0){
			return this.todo;
		} else{
			return 'sorry!! todo is empty';
		}
	}

	getTTodo(index){
		return this.todo[index-1];
	}

	clear(){
		this.todo = [];
	}
}

const todo = new Todo()

todo.addTodo('have to do some cp questions')
todo.addTodo('have to watch lectures')
todo.addTodo('journaling')
todo.addTodo('sleep of 6 hrs')
todo.addTodo('workout')
console.log('todos:', todo.getAllTodos());
console.log(todo.getTTodo(2))
todo.updateTodo(2, 'have to watch lectures of harkirat')
console.log('todos:', todo.getAllTodos())

todo.clear()
console.log(todo.getAllTodos())