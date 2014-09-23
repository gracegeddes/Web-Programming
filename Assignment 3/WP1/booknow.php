<!DOCTYPE html>
<html>
        <!-- Some styling content adapted from w3schools.com and some basic page content adapted from week1 class webpage-->
        <!-- Images used to construct Logo borrowed from http://www.clker.com/clipart-camera.html and
        http://www.clipartpanda.com/categories/strip-20clipart -->

    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src = "scripts/jquery-1.11.1.js"></script>
        <script src="scripts/jsscripts.js"></script>
        <title>Silverado - Book Now!</title>

    <script>
        
    function pageReload() 
		{
		location.reload();
		}
        
    </script>
    
    
    </head>
    
    <body>
    <?php include 'header.php'; ?>
   
    <nav>
        <a href="index.php">Home</a>|<a href="movies.php">Now Showing</a>|<a href="booknow.php">Book Now!</a>|<a href="contactus.php">Contact us</a>
    </nav>
        <h1> Book Now! </h1>
        <div class="para3">
        <fieldset>
        <div class="paddedDiv">
        <table>
          <tr>
            <th>Maxima Price List</th>
            <th>Mon - Tue</th>      
            <th>Wed - Sun</th>
            <th>Schedule</th>
            <th rowspan="7" style="visibility: hidden"> Hidden </th>
            <th>Rivola Price List</th>
            <th>Wed - Fri  <br />  12pm only</th>      
            <th>Wed - Sun</th>
            <th>Schedule</th>
          </tr>
          <tr>
            <td>Full</td>
            <td>$12</td>        
            <td>$18</td>
            <td rowspan="6">Monday - Friday: <br /> 2 Movies per day: 6pm & 9pm <br /><br />
             Saturday - Sunday: <br /> 3 Movies per day. 3pm, 6pm & 9pm</td>
            <td rowspan="2">Full</td>
            <td rowspan="2">$12</td>        
            <td rowspan="2">$18</td>
            <td rowspan="6">Monday - Friday: <br /> Exclusive bookings only! <br /><br /> Wednesday - Friday:<br /> 
            2 Movies per day: 12pm & 7pm <br /><br /> Saturday - Sunday: <br />2 Movies per day: 4pm & 7pm </td>
          </tr>
          <tr>
            <td>Concession</td>
            <td>$10</td>        
            <td>$15</td>
          </tr>
          <tr>
            <td>Child</td>
            <td>$8</td>        
            <td>$12</td>
            <td rowspan="2">Child</td>
            <td rowspan="2">$8</td>        
            <td rowspan="2">$12</td>
          </tr>
          <tr>
            <td>First Class - Adult</td>
            <td>$25</td>        
            <td>$30</td>
          </tr>
          <tr>
            <td>First Class - Child</td>
            <td>$25</td>        
            <td>$30</td>
            <td rowspan="2">Concession</td>
            <td rowspan="2">$10</td>        
            <td rowspan="2">$15</td>
          </tr>
          <tr>
            <td>Beanbag</td>
            <td>$20</td>        
            <td>$30</td>
          </tr>
        </table>
        </div >

        <H6>Please start by selecting the film and Cinema.</H6>
        <button onclick="pageReload()" class="fTitle"> || Reset Form ||</button><br /><br />
        <form action="http://titan.csit.rmit.edu.au/~e54061/wp/form-tester-2.php" method="post" onsubmit="" >
            <div class="bookingDiv2" id="cinema">
                    <span class="fTitle"> Film: </span> 
                    <select name="filmID">
                    <option value="0">            	Please select             	</option>
                    <option value="FALILV"> 		Fear and Loathing           </option> 
                    <option value="TWOO">           The Wizard of Oz            </option> 
                    <option value="TBB">            Blues Brothers              </option> 
                    <option value="SUB">            Submarine                   </option> 
                    <option value="GOTG">           Guardians of the Galaxy     </option> 
                    </select><br />
                
                    <span class="fTitle"> Cinema: </span> 
					<select name="cinema">
                    <option value="PS">            	Please select              	</option>
                    <option value="Rivola">             	Rivola                      </option> 
                    <option value="Maxima">             	Maxima                      </option>
                    </select>
            </div>

            <div id="day" class="bookingDiv">
                    <span class="fTitle"> Day: </span> 
                    <select name="day">
                    <option value="PS">             	Please select               </option>
                    <option value="Monday">             	Monday                      </option> 
                    <option value="Tuesday">             	Tuesday                     </option> 
                    <option value="Wednesday">             	Wednesday                   </option> 
                    <option value="Thursday">             	Thursday                    </option> 
                    <option value="Friday">             	Friday                      </option>
                    <option value="Saturday">             	Saturday                    </option>
                    <option value="Sunday">             	Sunday                      </option>
                    </select>
            </div>

			<div id="rivMessage"  class="bookingDiv">
                    <H6> Please contact us for business cinema bookings! </H6>
            </div>
			
            <div id="timeSelect" class="bookingDiv">
                    <span class="fTitle"> Time: </span> 
					<select name="time"> 
                    <option value="PS" 			id="timeMax">  		Please select               </option>
                    <option value="6pm-max" 	id="timeMax">  		6pm                         </option> 
                    <option value="9pm-max" 	id="timeMax"> 		9pm                         </option>
                    <option value="PS" 			id="timeMax2">   	Please select               </option>
                    <option value="3pm-max2" 	id="timeMax2">     	3pm                         </option>
                    <option value="6pm-max2" 	id="timeMax2">     	6pm                         </option> 
                    <option value="9pm-max2" 	id="timeMax2">     	9pm                         </option>
                    <option value="PS" 			id="timeRiv">  		Please select               </option>
                    <option value="12pm-riv" 	id="timeRiv"> 		12pm                        </option> 
                    <option value="7pm-riv" 	id="timeRiv"> 		7pm                         </option>
                    <option value="PS" 			id="timeRiv2">   	Please select               </option>
                    <option value="4pm-riv2" 	id="timeRiv2">   	4pm                         </option> 
                    <option value="7pm-riv2" 	id="timeRiv2">   	7pm                         </option>
                    </select>
            </div>

            <div id="rivTic" class="bookingDiv">
                    <span class="fTitle">Ticket Type: </span> 
                    <div>
					<br /> 
					<span class="fTitle"> Adult:        		</span><input onchange="adultPriceRiv()" 	name="adultSeatRiv" 	type='number' id='adultRiv' 	value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="adultSubTotalBox" >	<br />
                    <span class="fTitle"> Concession:   		</span><input onchange="concPriceRiv()" 	name="concSeatRiv"		type='number' id='concRiv' 		value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="concSubTotalBox" >	<br />
                    <span class="fTitle"> Child:      		  	</span><input onchange="childPriceRiv()" 	name="childSeatRiv"	type='number' id='childRiv' 	value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="childSubTotalBox" >	<br />
					</div>
					
            </div>
			
			<div id="totalPriceRiv" class="totalPrice">
			<span> Total Price :<input type="text" class="totalBox"  disabled id="totalPriceBoxRiv" /></span>
			</div>
            
			<div id="maxTic" class="bookingDiv">
                    <span class="fTitle">Ticket Type: </span> 
                    <div>
					<br /> 
					<span class="fTitle"> Adult:        		</span><input onchange="adultPriceMax()" 	name="adultseatMax" 	type='number' id='adultMax' 	value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="adultSubTotalBoxMax" >	<br />
                    <span class="fTitle"> Concession:   		</span><input onchange="concPriceMax()" 	name="concSeatMax" 		type='number' id='concMax' 		value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="concSubTotalBoxMax" >		<br />
                    <span class="fTitle"> Child:      		  	</span><input onchange="childPriceMax()" 	name="childSeatMax"		type='number' id='childMax' 	value='0' min='0' max='40'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="childSubTotalBoxMax" >	<br />
                    <span class="fTitle"> 1st Class - Adult: 	</span><input onchange="fcaPriceMax()" 		name="fcaSeatMax" 		type='number' id='fcaMax' 	 	value='0' min='0' max='12'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="fcaSubTotalBox" > 		<br />
                    <span class="fTitle"> 1st Class - Child: 	</span><input onchange="fccPriceMax()" 		name="fccSeatMax" 		type='number' id='fccMax' 	 	value='0' min='0' max='12'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="fccSubTotalBox" >			<br />
                    <span class="fTitle"> Beanbag: 				</span><input onchange="beanbagPriceMax()" 	name="BeanbagSeatMax" 	type='number' id='beanbagMax' 	value='0' min='0' max='13'/> <h9> Subtotal: </h9> <input type="text" class="subTotalBox" disabled id="beanbagSubTotalBox" >		<br />
                    </div>
            </div>
			
			<div id="totalPriceMax" class="totalPrice">
			<span> Total Price:<input type="text" class="totalBox" disabled id="totalPriceBoxMax" /> </span> <input type="hidden" name="price" id="totalPriceBoxMax2" />
			</div>
			
			
			<div class="submit" id="submit"><br /><input type="submit" value="Submit"  /></div>
	</form>
    </fieldset>
    </div>
    <footer>
            &copy; Ed Watkins - s3490783 | Grace Geddes - s3485536 - RMIT - 2014 <a href=' '>
            <a href="http://validator.w3.org/check?uri=referer"><img style="height:25px"
            src="http://www.w3.org/html/logo/downloads/HTML5_Logo_32.png" alt="HTML Validator" /></a> 
            <a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="height:25px"
            src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS Validator"/></a>  
    </footer>

    </body>

</html>