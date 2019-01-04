$(document).ready(()=> {
	console.log('document is ready');

var result = [];
var thisNum;
$('.button.number').on('click', function () {
		if(thisNum) thisNum = thisNum + $(this).val();
		else thisNum = $(this).val();
	 $('#calc-total').val(thisNum);
	 $('#calc-total').append(thisNum);
	 console.log(result);
});

$('.button.operator').on('click', function () {
		var operation = $(this).val();
		result.push(thisNum);
		thisNum = null;
	 	result.push(operation);
	 	console.log(result);
});


	$('.button.equals').click(()=>{
		result.push(thisNum);
		var addTotal = parseFloat(result[0]) + parseFloat(result[2]);
		var subTotal = parseFloat(result[0]) - parseFloat(result[2]);
		var multTotal = parseFloat(result[0]) * parseFloat(result[2]);
		var divTotal = parseFloat(result[0]) / parseFloat(result[2]);
		if (result[1]==='-'){
			$('#calc-total').val(subTotal);
		}
		if (result[1]==='+'){
			$('#calc-total').val(addTotal);
		}
		if (result[1]==='*'){
			$('#calc-total').val(multTotal);
		}
		if (result[1]==='/'){
			$('#calc-total').val(divTotal);
		}
	});

		$('.button.clear').click(()=>{
			thisNum = null;
			$('.calc-value').val('');
			result = [];
			console.log(result);
		});

		$('.homepage').click(() => {
			window.location.href = '../mod3-week2-homepage.html';
		});

	});
