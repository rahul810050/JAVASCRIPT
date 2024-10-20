function takeTodo() {
	const todoBtn = document.querySelector('.todoBtn');
	todoBtn.style.display = "none"; // Hide the button
	const formTodo = document.querySelector('.formTodo');
	formTodo.style.display = 'block'; // Show the form
}

function addTodo() {
	const descTodo = document.querySelector('.descTodo').value;
	const typeTodo = document.querySelector('.typeTodo').value;
	const textTodo = document.querySelector('.textTodo').value;

	if (descTodo === '') {
			alert('Please add a description');
			return;
	}
	if (textTodo === '') {
			alert('Please add Todo');
			return;
	}

	// Get current date
	const date = new Date();
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options); // Format the date

	const todoContainer = document.querySelector('.todoUpper');

	todoContainer.innerHTML += `
			<div class="todo" style="background-color: rgb(88, 88, 88); padding: 20px; border-radius: 8px; margin: 8px;">
                    <div>
                        <h4>${textTodo}</h4>
                        <p style="margin-top: -14px;">${descTodo}</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <button style="width: 90px; height: 27px; font-size: 13px; font-weight: bold; border: none; border-radius: 15px;">${typeTodo}</button>
                        <button style="width: 140px; height: 27px; font-size: 13px; font-weight: bold; border: none; border-radius: 15px;">${formattedDate}</button>
                    </div>
                </div>
	`;

	ableToAddNew();
}

function ableToAddNew() {
	const todoBtn = document.querySelector('.todoBtn');
	todoBtn.style.display = "block"; // Show the button
	const formTodo = document.querySelector('.formTodo');
	formTodo.style.display = 'none'; // Hide the form
}
