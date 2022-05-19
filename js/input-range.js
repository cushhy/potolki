function range() {
	let val = $('.square-input').val();
	val = (val * 100) / 300;
	$('.square-input').css({
		'background': '-webkit-linear-gradient(left, #E2D3B7 0%, #E2D3B7 ' + val + '%, #F7F7F7 ' + val + '%, #F7F7F7 100%)'
	});

}