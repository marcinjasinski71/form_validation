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

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} must contain minimum ${min} characters`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, `Passwords does not match.`);
	}
};

// button do wysyłania, klik -> event -> prevent default zeby nie przeladowywal strony za kazdym razem, nastepnie funkcje sprawdzające nasze inputy
sendBtn.addEventListener(`click`, e => {
	e.preventDefault();

	checkForm([username, pass, pass2, email]);
	checkLength(username, 6);
	checkLength(pass, 8);
	checkPassword(pass, pass2);
});

// clearbtn -> czyszczenie kazdego inputa username pass pass2 email -> element value robimy na pusto
clearBtn.addEventListener(`click`, e => {
	e.preventDefault();

	[username, pass, pass2, email].forEach(el => {
		el.value = '';
	});
});
