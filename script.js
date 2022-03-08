const username = document.querySelector(`#username`);
const pass = document.querySelector(`#password`);
const pass2 = document.querySelector(`#password2`);
const email = document.querySelector(`#email`);
const sendBtn = document.querySelector(`.send`);
const clearBtn = document.querySelector(`.clear`);
const popup = document.querySelector(`.popup`);

const showError = (input, msg) => {
	//argument INPUT prechowuje nasze INPUTY
	//agrument MSG przechowuje placeholder w inputach

	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(`.error-text`);
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};
// argument INPUT z funkcji checkForm przechowuję tablicę z naszymi inputami
// argument EL odnosi się do kazdej zmiennej ktora umiescilismy w tablicy

sendBtn.addEventListener(`click`, e => {
	e.preventDefault();

	checkForm([username, pass, pass2, email]);
});

clearBtn.addEventListener(`click`, e => {
	e.preventDefault();

	[username, pass, pass2, email].forEach(el => {
		el.value = '';
	});
});
