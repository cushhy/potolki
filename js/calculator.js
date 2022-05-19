let totalCost1 = $('#result'),
	totalCost2 = $('#result2'),
	square = Number($('#amount-square')[0].value),
	materialVal = Number($('#select-1>button')[0].value),
	materialType = $('#select-1>button').text(),
	lusterVal = Number($('#select-2>button')[0].value),
	lusterCount = $('#select-2>button').text(),
	lampVal = Number($('#select-3>button')[0].value),
	lampCount = $('#select-3>button').text(),
	linksInput = {
		inputRange: document.querySelector('#amount-square'),
		materialVal: $('#select-1'),
		lusterVal: $('#select-2'),
		lampVal: $('#select-3'),
	};
updateCost();
//events for accordion effect
const arrayOfCalculatorSelectors = ['#select-1', '#select-2', '#select-3'];
$(arrayOfCalculatorSelectors.join(',')).on('click', toggleCalculatorSelect);
//events for changing input-select
$('.select__options').on('click', changeValues);
//events for input-range
$("#amount-square").on("pointerdown", () => this.addEventListener('pointermove', changeValueOnRange));
$("#amount-square").on("pointerup", () => this.removeEventListener('pointermove', changeValueOnRange));
$("#amount-square").on("change", changeValueOnRange);

function updateCost() {
	const cost = square * materialVal + Number(lusterVal) + Number(lampVal);
	totalCost1.text(cost + ' ₽');
	totalCost2.text(cost + ' ₽');
}

function changeValueOnRange(event) {
	const target = event.target;
	const value = target.value;
	square = value;
	$('#square-amount').text(value);
	updateCost();
}

function changeValues(e) {
	const parent = e.originalEvent.target.closest('.select__options');
	if (!parent) return;

	const target = e.target;
	const value = target.dataset.value;
	const btn = $('#' + linksInput[parent.dataset.type][0].id + '>button');
	btn.text(target.innerHTML);
	btn.attr('value', value);
	switch (parent.dataset.type) {
		case 'materialVal':
			materialVal = value;
			materialType = btn.text();
			break;
		case 'lusterVal':
			lusterVal = value;
			lusterCount = btn.text();
			break;
		case 'lampVal':
			lampVal = value;
			lampCount = btn.text();
			break;
		default:
			console.log('Smth went wrong!')
			break;
	}
	updateCost(null);
}

function toggleCalculatorSelect(event) {
	const target = event.target;
	const targetID = '#select' + target.closest('[data-select]').dataset.index;
	arrayOfCalculatorSelectors.forEach(id => {
		(id == targetID) ? null : $(id).removeClass('select_show');

	});
	const targetElement = $(targetID);
	targetElement.toggleClass('select_show');
	if (targetElement.hasClass('select_show')) {
		$(document).on('click', clickToCloseSelects);
		event.stopPropagation();
	}
}

function clickToCloseSelects(event) {
	arrayOfCalculatorSelectors.forEach(id => {
		$(id).removeClass('select_show');
	});
	$(document).off('click', clickToCloseSelects);
}