


//NAME VALIDATION
function validate_name(){

    let x1 = document.forms["myform"]["p_name"].value; 
    let x2 = document.forms["myform"]["age"].value;

    if(x1==""){
        document.getElementById("message").innerHTML = "**Please Enter Your name";
        return false;
       }
    if(!isNaN(x1)){
     document.getElementById("message").innerHTML = "**Only characters are allowed";
     return false;
    }
       if(x2==""){
        document.getElementById("message1").innerHTML = "**Please Enter Age";
        return false;
       }

    if(isNaN(x2)) {  
     document.getElementById("message1").innerHTML = "**Only numbers are allowed";  
     return false; 
     
     
  } 

}
//END OF NAME VALIDATION






//PHONE NUMBER VALIDATION(CONTACT DETAILS (PERSONAL))

    function validate_phone() {
        let x = document.forms["myForm"]["ph"].value;
        if (isNaN(x) || x.length<10) {
          
          return false;
        }
        else{
            return true;
        }
      }

      function validate_phoneop() {
        let x = document.forms["myForm"]["phon"].value;
        if (isNaN(x)) {
            if (typeof(x)==null){
                return true;
            }
          else {return false;}
          

        }
        else{
            return true;
        }
      }
function bothph(){
    if(!(validate_phone() && validate_phoneop()))
    {
       alert("Entered Phone Number is Not Valid")
       return false;
    }
    else{
        return true;
    }
}

      //END OF PHONE NUMBER VALIDATION
  
  
//PIN CODE VALIDATION
    function validate_pincode()
        {
        let x = document.forms["myform"]["pin"].value;
        if (isNaN(x)) {
            document.getElementById("message").innerHTML = "**Only numbers are allowed";
          return false;
        }

        if (x.length<6) {
            document.getElementById("message").innerHTML = "**Enter a valid 6 digit pin code";
          return false;
        } 
          }

    //END OF PIN CODE VALIDATION






// DATE VALIDATION(MAIN)

function date_validation(){
    let x1 = document.forms["myform"]["DATE1"].value;
    let x2 = document.forms["myform"]["DATE2"].value;
    if(!(x2>=x1)){
        alert("There Are No Trains For The Entered RETURN Date...")
        return false;
    }

}
//END OF DATE VALIDATION







//PNR VALIDATION
function validate_pnr()
        {
    let x =  document.forms["myform"]["pnr"].value;

    if (isNaN(x)) {
        document.getElementById("message").innerHTML = "**Only numbers are allowed";
        return false;
    }

    if (x.length<10 || x=="") {
        document.getElementById("message").innerHTML = "**Enter a valid 10 digit PNR";
        return false;
    }

    

    else {
        alert('THIS IS JUST THE FRONT END 😃😃')
        return false;
    }
                
          }

    //END OF PNR VALIDATION

    //CONTACT US VALIDATION

    function validate_cont()
            {
            let x = document.forms["myform"]["phw"].value;
            if (isNaN(x) || x.length<10) {
                alert("Entered Phone number is not valid")
              return false;
            }

            else {
                alert('THIS IS JUST THE FRONT END 😃😃')
                return false;
            }
             
              }

        //END OF CONTACT US VALIDATION



        //LOGIN VALIDATION
    function validate_password()
        {
               let x = document.forms["myform"]["pass"].value;
               if(x==""){
                document.getElementById("message").innerHTML = "**Fill the password please!";
                return false;
               }  

               if(x.length < 8) {  
                document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
                return false;  
             } 

             if(x.length > 15) {  
                document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
                return false;  
             }

             else {  
                  
                alert("THIS IS JUST THE FRONT END 😃😃");  
             }  
          }

      //END OF LOGIN VALIDATION



      //SIGN UP VALIDATION
    function validate_signup()
        {
        let x = document.forms["myform"]["ph"].value;
            if (isNaN(x) || x.length<10) {
                alert("Entered Phone number is not valid")
              return false;
            }

            
               let x1 = document.forms["myform"]["pswd1"].value; 
               let x2 = document.forms["myform"]["pswd2"].value;
               if(x1=="" ){
                document.getElementById("message").innerHTML = "**Fill the password please!";
                return false;
               }  

               if(x1.length < 8) {  
                document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
                return false;  
             } 


             if(x1.length > 15) {  
                document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
                return false;  
             }

             if(x1!=x2)
             {
                document.getElementById("message1").innerHTML = "**Password didn't match";
                return false;
             }

             else {  
                  
                alert("Account has been created successfully 😃😃!!");  
             }  
          }


    //END OF SIGN UP VALIDATION



    //FORGET PASSWORD VALIDATION

    function validate_forget(){

               let x1 = document.forms["myform"]["pswd1"].value; 
               let x2 = document.forms["myform"]["pswd2"].value;
               if(x1=="" ){
                document.getElementById("message").innerHTML = "**Fill the password please!";
                return false;
               }  

               if(x1.length < 8) {  
                document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
                return false;  
             } 


             if(x1.length > 15) {  
                document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
                return false;  
             }

             if(x1!=x2)
             {
                document.getElementById("message1").innerHTML = "**Password didn't match";
                return false;
             }

             else {  
                  
                alert("Password has Changed successfully 😃😃!!");  
             }

    }


    //END OF FORGET PASSWORD VALIDATION

    

    function validate_foodpnr()
        {
    let x =  document.forms["myform"]["pnr"].value;

    if (isNaN(x)) {
        document.getElementById("message").innerHTML = "**Only numbers are allowed";
        return false;
    }

    if (x.length<10 || x=="") {
        document.getElementById("message").innerHTML = "**Enter a valid 10 digit PNR";
        return false;
    }
}


    function validate_trainnumber()
        {
                
          }
    