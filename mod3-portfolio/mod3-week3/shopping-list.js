$(document).ready(()=> {
	console.log('document is ready');

	$('.add-item-button').click(() => {
		var item = $('.item').val();
		var price = $('.price').val();
		if(!item.length) return;
		$('.list-group').append(`<li class="list-group-item">${item} $${price}<button class="btn btn-danger float-right delete-button"><i class="fas fa-trash-alt"></i></button>
		<button class="btn btn-primary float-right cross-off-button"><i class="fas fa-check"></i></button></li>`);
			// function getTotal() {
			// var startingAmt = $('.total-val').val();
			// $('.total-price').append(`$ ${startingAmt + price}`)
			// }
			// getTotal();
			//Attempt at the bonus but ran out of time
		$('.item').val('');
		$('.price').val('');
	});



	$('div').on('click', 'button.delete-button', function()  {
		$(this).parent().remove();
	})

	$('div').on('click', 'button.cross-off-button', function()  {
		$(this).parent().css("text-decoration", "line-through");
		$('.cross-off-button').css("display", "none")
	})

	$(document).on('mouseover', 'li', function() {
		$(this).children().show();
	});
	$(document).on('mouseleave', 'li', function() {
		$(this).children().hide();
	});

	$('.homepage').click(() => {
		window.location.href = '../mod3-week2-homepage.html';
	});




});
