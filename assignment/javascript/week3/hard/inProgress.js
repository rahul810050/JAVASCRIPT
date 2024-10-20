function takeTodo() {
	const InProgressBtn = document.querySelector('.InProgressBtn');
	InProgressBtn.style.display = "none"; // Hide the button
	const formInProgress = document.querySelector('.formInProgress');
	formInProgress.style.display = 'block'; // Show the form
}

function addTodo() {
	const descInProgress = document.querySelector('.descInProgress').value;
	const typeInProgress = document.querySelector('.typeInProgress').value;
	const textInProgress = document.querySelector('.textInProgress').value;

	if (descInProgress === '') {
			alert('Please add a description');
			return;
	}
	if (textInProgress === '') {
			alert('Please add Todo');
			return;
	}

	// Get current date
	const date = new Date();
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options); // Format the date

	const todoContainer = document.querySelector('.InProgressUpper');

	todoContainer.innerHTML += `
			<div class="InProgress" style="background-color: rgb(88, 88, 88); padding: 20px; border-radius: 8px; margin: 8px;">
                    <div>
                        <h4>${textInProgress}</h4>
                        <p style="margin-top: -14px;">${descInProgress}</p>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <button style="width: 90px; height: 27px; font-size: 13px; font-weight: bold; border: none; border-radius: 15px;">${typeInProgress}</button>
                        <button style="width: 140px; height: 27px; font-size: 13px; font-weight: bold; border: none; border-radius: 15px;">${formattedDate}</button>
                    </div>
                </div>
	`;

	ableToAddNew();
}

function ableToAddNew() {
	const InProgressBtn = document.querySelector('.InProgressBtn');
	InProgressBtn.style.display = "block"; // Show the button
	const formInProgress = document.querySelector('.formInProgress');
	formInProgress.style.display = 'none'; // Hide the form
}
