$(document).ready(()=> {
	console.log('document is ready');

	$('.homepage').click(() => {
		window.location.href = '../mod3-week2-homepage.html';
	});

	$('.poor').click(() =>{
		var billTotal = $('.bill-total').val();
		var tipTotal = parseFloat((billTotal * .15)).toFixed(2);
		var totalPeople = $('.num-people').val();
		var split = ((parseFloat(billTotal) + parseFloat(tipTotal)) / parseFloat(totalPeople)).toFixed(2);
		$('#tip-amount').val(`$${tipTotal}`);
		$('#split-check-amount').val(`$${split}`);
	})

	$('.fine').click(() =>{
		var billTotal = $('.bill-total').val();
		var tipTotal = parseFloat((billTotal * .20)).toFixed(2);
		var totalPeople = $('.num-people').val();
		var split = ((parseFloat(billTotal) + parseFloat(tipTotal)) / parseFloat(totalPeople)).toFixed(2);
		$('#tip-amount').val(`$${tipTotal}`);
		$('#split-check-amount').val(`$${split}`);
	})

	$('.great').click(() =>{
		var billTotal = $('.bill-total').val();
		var tipTotal = parseFloat((billTotal * .25)).toFixed(2);
		var totalPeople = $('.num-people').val();
		var split = ((parseFloat(billTotal) + parseFloat(tipTotal)) / parseFloat(totalPeople)).toFixed(2);
		$('#tip-amount').val(`$${tipTotal}`);
		$('#split-check-amount').val(`$${split}`);
	})

	$('.incredible').click(() =>{
		var billTotal = $('.bill-total').val();
		var tipTotal = parseFloat((billTotal * .30)).toFixed(2);
		var totalPeople = $('.num-people').val();
		var split = ((parseFloat(billTotal) + parseFloat(tipTotal)) / parseFloat(totalPeople)).toFixed(2);
		$('#tip-amount').val(`$${tipTotal}`);
		$('#split-check-amount').val(`$${split}`);
	})



});
