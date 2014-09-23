


if (day == "1" && cinema == "1" || 
		day == "2" && cinema == "1")
		{$('#rivMessage').css('display', 'block');
		$('#rivTic').css('display', 'none');}
	
	else if (day == "1" && cinema == "2" || 
			 day == "2" && cinema == "2")
		{discountPrice();
		$('#maxTic').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#totalPriceMax').css('display', 'block');}
	
	else if (day == "3" && cinema == "1" && time == "12pm" || 
			 day == "4" && cinema == "1" && time == "12pm" || 
			 day == "5" && cinema == "1" && time == "12pm")
		{discountPrice();
		$('#rivTic').css('display', 'block');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'block');}
	
	else if (day == "3" && cinema == "1" && time == "7pm" || 
			 day == "4" && cinema == "1" && time == "7pm" || 
			 day == "5" && cinema == "1" && time == "7pm")
		{normalPrice();
		$('#rivTic').css('display', 'block');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'block');}
	
	else if (day == "3" && cinema == "2" && time == "2" || 
			 day == "4" && cinema == "2" && time == "2" || 
			 day == "5" && cinema == "2" && time == "2")
		{normalPrice();
		$('#maxTic').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#totalPriceMax').css('display', 'block');}
	
	else if (day == "3" && cinema == "2" && time == "3" || 
		day == "4" && cinema == "2" && time == "3" || 
		day == "5" && cinema == "2" && time == "3")
		
		{normalPrice();
		$('#maxTic').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#totalPriceMax').css('display', 'block');}
	
	else if (day == "6" && cinema == "1" || 
			 day == "7" && cinema == "1")
		{normalPrice();
		$('#rivTic').css('display', 'block');
		$('#maxTic').css('display', 'none');
		$('#totalPriceRiv').css('display', 'block');}
	
	else if (day == "6" && cinema == "2" || 
			 day == "7" && cinema == "2")
		{normalPrice();
		$('#maxTic').css('display', 'block');
		$('#rivTic').css('display', 'none');
		$('#totalPriceMax').css('display', 'block');}	
	});