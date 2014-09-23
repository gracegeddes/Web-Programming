<!DOCTYPE html>
<html>
        <!-- Some styling content adapted from w3schools.com and some basic page content adapted from week1 class webpage-->
        <!-- Images used to construct Logo borrowed from http://www.clker.com/clipart-camera.html and
        http://www.clipartpanda.com/categories/strip-20clipart -->

    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="style.css">
        <title>Silverado - Contact Us</title>
    </head>

    <body>
    <header>
        <div><img src='logo.png' alt='Silverado'/></div>
    </header>
   
        <nav>
            <a href="index.html">Home</a>|<a href="movies.html">Now Showing</a>|<a href="booknow.html">Book Now!</a>|<a href="contactus.html">Contact us</a>
        </nav>
	

        <h1> Contact Us </h1>
        <div class="para2">
			<fieldset>
            <form action="http://titan.csit.rmit.edu.au/~e54061/wp/form-tester.php" method="post" onsubmit="" ><br />
                <div> <span class="fTitle"> First Name :    </span>  <input type ="text" 	name="fName"/>                     </div>    
                <div> <span class="fTitle"> Surname :       </span>  <input type ="text" 	name="sName"/>                     </div>
                <div> <span class="fTitle"> Email Address : </span>  <input type ="email" 	name="email"/>                    </div>
                <div> <span class="fTitle"> Subject :       </span>  <input type ="text" 	name="subject"/>                   </div>
                <div> <span class="fTitle"> Phone Number :  </span>  <input type ="tel" 	name="phoneNum"/>                   </div>
                <div> <span class="fTitle"> Message :       </span>  <textarea rows="4" cols="35" name=message> </textarea> </div>
                <input type=submit value="Submit" /> <br /><br />
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