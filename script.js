const username = document.querySelector(`#username`);
const pass = document.querySelector(`#password`);
const pass2 = document.querySelector(`#password2`);
const email = document.querySelector(`#email`);
const sendBtn = document.querySelector(`.send`);
const clearBtn = document.querySelector(`.clear`);
const popup = document.querySelector(`.popup`);

// prevent na reload strony przy kliknieciu buttona, tablica z naszymi zmiennymi inputami, funkcja foreach => value kazdego naszego elementu zmieniamy na puste.
clearBtn.addEventListener(`click`, e => {
	e.preventDefault();

	[username, pass, pass2, email].forEach(el => {
		el.value = '';
	});
});
