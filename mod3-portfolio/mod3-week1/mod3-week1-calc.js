$(document).ready(()=> {
	console.log('document is ready');

var result = [];

$('.button.number').on('click', function () {
		var thisNum = $(this).val();
	 result.push(thisNum);
	 $('#calc-total').val(thisNum);
	 $('#calc-total').append(thisNum);
	 console.log(result);
});

$('.button.operator').on('click', function () {
		var operation = $(this).val();
	 result.push(operation);
	 console.log(result);
});


	$('.button.equals').click(()=>{
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
			$('.calc-value').val('');
			result = [];
			console.log(result);
		});

		$('.homepage').click(() => {
			window.location.href = '../mod3-week2-homepage.html';
		});

	});


// 	$('.button').click(() => {
// 		var buttonValue = $(this).val();
// 		$('.calc-value').append(`${buttonValue}`);
// 		$('.calc-value').val('');
// 	});
//
// 	$('.button.subtract').click(()=>{
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) - parseFloat(num2);
// 		$('.calc-value').append(total);
// 	});
//
// 	$('.button.multiply').click(()=>{
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) * parseFloat(num2);
// 		$('.calc-value').append(total);
// 	});
//
// 	$('.button.divide').click(()=>{
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) / parseFloat(num2);
// 		$('.calc-value').append(total);
// 	});
//
// 	$('.button.clear').click(()=>{
// 		$('.input.1').val('');
// 		$('.input.2').val('');
// 		$('.calc-value').val('');
// 	});
//

//
// });

//Problems to fix:
// 1) Single button at a time
// why doesn't divide work?
