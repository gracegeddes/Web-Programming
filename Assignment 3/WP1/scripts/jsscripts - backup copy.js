


var adultTicket = 0;
var concessionTicket = 0;
var childTicket = 0;
var fCATicket = 0;
var fCCTicket = 0;
var beanbagTicket = 0;

var cinema = "0";
var day = "0";
var time = "0";

$( document ).ready(function() {
		
	$('select[name=formCinema]').change(function(){
		cinema = $(this).val();
		if (cinema == "1") 
			{
			$('#day').css('display', 'block');
			} 
		else if (cinema == "2")
			{
			$('#day').css('display', 'block');
			}
	});
});

function showDay() 	
	{
	$('select[name=formTime]').change(function(){
	time = $(this).val();
	if (day == "1" || day == "2" && cinema == "1")
		{$('#rivMessage').css('display', 'block');
		$('#rivTic').css('display', 'none');}
	else if (day == "1" || day == "2" && cinema == "2")
		{$('#timeMax1').css('display', 'block');
		$('#rivMessage').css('display', 'none');}
	else if (day == "3" || day == "4" || day == "5" && cinema == "1")
		{$('#timeRiv1').css('display', 'block');
		$('#timeMax1').css('display', 'none');
		$('#timeMax2').css('display', 'none');
		$('#timeRiv2').css('display', 'none');
		$('#rivMessage').css('display', 'none');}
	else if (day == "3" || day == "4" || day == "5" && cinema == "2")
		{$('#timeMax2').css('display', 'block');
		$('#timeMax1').css('display', 'none');
		$('#timeRiv1').css('display', 'none');
		$('#timeRiv2').css('display', 'none');
		$('#rivMessage').css('display', 'none');}
	else if (day == "6" || day == "7" && cinema == "1")
		{$('#timeRiv2').css('display', 'block');
		$('#timeMax1').css('display', 'none');
		$('#timeMax2').css('display', 'none');
		$('#timeRiv1').css('display', 'none');
		$('#rivMessage').css('display', 'none');}
	else if (day == "6" || day == "7" && cinema == "2")
		{$('#timeMax2').css('display', 'block');
		$('#timeMax1').css('display', 'none');
		$('#timeRiv1').css('display', 'none');
		$('#timeRiv2').css('display', 'none');
		$('#rivMessage').css('display', 'none');}
	});}
	
	
	
