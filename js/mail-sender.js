'use strict'

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('#form');
	const formBody = document.querySelector('.calculator__check');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidation(form);
		let formData = new FormData(form);
		if (error === 0) {
			formBody.classList.add('_sending');

			formData.set('square', square);
			formData.set('material', materialType);
			formData.set('luster', lusterCount);
			formData.set('lamp', lampCount);
			formData.set('cost', totalCost1.text());
			let resp = await fetch('send_mail.php', {
				method: 'POST',
				body: formData,
			});

			if (resp.ok) {
				form.reset();
				formBody.classList.remove('_sending');
			} else {
				console.log('Ошибка');
				formBody.classList.remove('_sending');
			}
		}
	}

	function formValidation(form) {
		let error = 0;
		let reqs = document.querySelectorAll('._req');

		for (let i = 0; i < reqs.length; i++) {
			const input = reqs[i];
			input.parentElement.classList.remove('error');
			input.classList.remove('error');
			if (input.classList.contains('_tel') && (input.value.indexOf('_') != -1 || input.value === '')) {
				input.classList.add('error');
				error++;
			} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
				input.classList.add('error');
				error++;
			}
		}
		return error;
	}
});