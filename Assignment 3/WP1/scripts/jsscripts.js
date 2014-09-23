
var adultTicket = 0;
var concessionTicket = 0;
var childTicket = 0;
var fCATicket = 0;
var fCCTicket = 0;
var beanbagTicket = 0;
var testAdultTicket = 0;

var adultSubTotal = 0;
var concSubTotal = 0;
var childSubTotal = 0;
var fcaSubTotal = 0;
var fccSubTotal = 0;
var beanbagSubTotal = 0;

var totalPrice = 0;

var cinema = "0";
var day = "0";
var time = "0";

function discountPrice(){
	adultTicket = 12;
	concessionTicket = 10;
	childTicket = 8;
	fCATicket = 25;
	fCCTicket = 25;
	beanbagTicket = 20;}

	
function normalPrice(){
	adultTicket = 18;
	concessionTicket = 15;
	childTicket = 12;
	fCATicket = 30;
	fCCTicket = 30;
	beanbagTicket = 30;}



$( document ).ready(function() {
		
	$('select[name=cinema]').change(function(){
	cinema = $(this).val();
	if (cinema == "Rivola") 
		{$('#day').css('display', 'block');
		$('#timeSelect').css('display', 'none');
		$('#timeMax1').css('display', 'none');
		$('#timeMax2').css('display', 'none');
		$('#timeRiv1').css('display', 'none');
		$('#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}	
	else if (cinema == "Maxima")
		{$('#day').css('display', 'block');
		$('#timeSelect').css('display', 'none');
		$('#timeMax1').css('display', 'none');
		$('#timeMax2').css('display', 'none');
		$('#timeRiv1').css('display', 'none');
		$('#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	});

	
	
	
	$('select[name=day]').change(function(){
	day = $(this).val();
	if (day == "Monday" && cinema == "Rivola" || 
		day == "Tuesday" && cinema == "Rivola")
		{$('#timeSelect').css('display', 'none');
		$('#timeMax,#timeMax,#timeMax').css('display', 'none');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'none');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'block');
		$('#submit').css('display', 'none');}
	
	
	else if (day == "Monday" && cinema == "Maxima" || day == "Tuesday" && cinema == "Maxima")
		{$('#timeSelect').css('display', 'block');
		$('#timeMax,#timeMax,#timeMax').css('display', 'block');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'none');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	
	
	else if (day == "Wednesday" && cinema == "Rivola" || day == "Thursday" && cinema == "Rivola" || day == "Friday" && cinema == "Rivola")
		{$('#timeSelect').css('display', 'block');
		$('#timeMax,#timeMax,#timeMax').css('display', 'none');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'block');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	
	
	else if (day == "Wednesday" && cinema == "Maxima"|| day == "Thursday" && cinema == "Maxima" || day == "Friday" && cinema == "Maxima")
		{$('#timeSelect').css('display', 'block');
		$('#timeMax,#timeMax,#timeMax').css('display', 'block');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'none');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'none');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	
	
	else if (day == "Saturday" && cinema == "Rivola" || day == "Sunday" && cinema == "Rivola")
		{$('#timeSelect').css('display', 'block');
		$('#timeMax,#timeMax,#timeMax').css('display', 'none');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'none');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	
	
	else if (day == "Saturday" && cinema == "Maxima" || day == "Sunday" && cinema == "Maxima")
		{$('#timeSelect').css('display', 'block');
		$('#timeMax,#timeMax,#timeMax').css('display', 'none');
		$('#timeMax2,#timeMax2,#timeMax2').css('display', 'none');
		$('#timeRiv,#timeRiv,#timeRiv').css('display', 'none');
		$('#timeRiv2,#timeRiv2,#timeRiv2').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'none');
		$('#totalPriceMax').css('display', 'none');
		$('#rivMessage').css('display', 'none');
		$('#submit').css('display', 'none');}
	});
	

	
	$('select[name=time]').change(function(){
	time = $(this).val();
	if (cinema == "Rivola"){
		if (day == "Monday" || day == "Tuesday"){
			$('#rivMessage').css('display', 'block');
			$('#rivTic').css('display', 'none');
		}
		else if (day == "Wednesday" || day == "Thursday" || day == "Friday"){
			if (time == "12pm-riv"){
				discountPrice();
				$('#rivTic').css('display', 'block');
				$('#maxTic').css('display', 'none');
				$('#totalPriceRiv').css('display', 'block');
				$('#totalPriceMax').css('display', 'none');
				$('#submit').css('display', 'none');
			}
			else if (time == "7pm-riv"){
				normalPrice();
				$('#rivTic').css('display', 'block');
				$('#maxTic').css('display', 'none');
				$('#totalPriceRiv').css('display', 'block')
				$('#totalPriceMax').css('display', 'none');
				$('#submit').css('display', 'none');
			}
		}
		else if (day == "Saturday" || day == "Sunday"){
			normalPrice();
			$('#rivTic').css('display', 'block');
			$('#maxTic').css('display', 'none');
			$('#totalPriceRiv').css('display', 'block')
			$('#totalPriceMax').css('display', 'none');
			$('#submit').css('display', 'none');
		}
	}
	else if (cinema == "Maxima"){
		if (day == "Monday" || day == "Tuesday"){
			discountPrice();
			$('#maxTic').css('display', 'block');
			$('#rivTic').css('display', 'none');
			$('#totalPriceMax').css('display', 'block')
			$('#totalPriceRiv').css('display', 'none');
			$('#submit').css('display', 'none');
		}
		else if (day == "Wednesday" || day == "Thursday" || day == "Friday"){
			normalPrice();
			$('#maxTic').css('display', 'block');
			$('#rivTic').css('display', 'none');
			$('#totalPriceMax').css('display', 'block');
			$('#totalPriceRiv').css('display', 'none');
			$('#submit').css('display', 'none');
		}
		else if (day == "Saturday" || day == "Sunday"){
			normalPrice();
			$('#maxTic').css('display', 'block');
			$('#rivTic').css('display', 'none');
			$('#totalPriceMax').css('display', 'block');
			$('#totalPriceRiv').css('display', 'none');
			$('#submit').css('display', 'none');
		}
	}});
});
	
function adultPriceMax()
	{
	adultSubTotal = document.getElementById("adultMax").value * adultTicket;
	console.log(adultSubTotal);
	$( "#adultSubTotalBoxMax" ).val( adultSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}

function concPriceMax()
	{
	concSubTotal = document.getElementById("concMax").value * concessionTicket;
	console.log(concSubTotal);
	$( "#concSubTotalBoxMax" ).val( concSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}

function childPriceMax()
	{
	childSubTotal = document.getElementById("childMax").value * childTicket;
	console.log(childSubTotal);
	$( "#childSubTotalBoxMax" ).val( childSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}
	
function fcaPriceMax()
	{
	fcaSubTotal = document.getElementById("fcaMax").value * fCATicket;
	console.log(fcaSubTotal);
	$( "#fcaSubTotalBox" ).val( fcaSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}
	
function fccPriceMax()
	{
	fccSubTotal = document.getElementById("fccMax").value * fCCTicket;
	console.log(fccSubTotal);
	$( "#fccSubTotalBox" ).val( fccSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}
	
function beanbagPriceMax()
	{
	beanbagSubTotal = document.getElementById("beanbagMax").value * beanbagTicket;
	console.log(beanbagSubTotal);
	$( "#beanbagSubTotalBox" ).val( beanbagSubTotal );
	totalPriceMax();
	$('#submit').css('display', 'block');
	}
	
function totalPriceMax()
	{
	totalPrice = adultSubTotal+concSubTotal+childSubTotal+fcaSubTotal+fccSubTotal+beanbagSubTotal;
	console.log(totalPrice);
	$( "#totalPriceBoxMax" ).val( totalPrice );
	$( "#totalPriceBoxMax2" ).val( totalPrice );
	}

	
	
	
function adultPriceRiv()
	{
	adultSubTotal = document.getElementById("adultRiv").value * adultTicket;
	console.log(adultSubTotal);
	$( "#adultSubTotalBox" ).val( adultSubTotal );
	totalPriceRiv();
	$('#submit').css('display', 'block');
	}

function concPriceRiv()
	{
	concSubTotal = document.getElementById("concRiv").value * concessionTicket;
	console.log(concSubTotal);
	$( "#concSubTotalBox" ).val( concSubTotal );
	totalPriceRiv();
	$('#submit').css('display', 'block');
	}

function childPriceRiv()
	{
	childSubTotal = document.getElementById("childRiv").value * childTicket;
	console.log(childSubTotal);
	$( "#childSubTotalBox" ).val( childSubTotal );
	totalPriceRiv();
	$('#submit').css('display', 'block');
	}
	
function totalPriceRiv()
	{
	totalPrice = adultSubTotal+concSubTotal+childSubTotal;
	console.log(totalPrice);
	$( "#totalPriceBoxRiv" ).val( totalPrice );
	$( "#totalPriceBoxMax2" ).val( totalPrice );
	}
	
	