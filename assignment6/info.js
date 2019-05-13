



var countError;



function formValidation(src){
    countError=0;
    //clean the section
    var dispalyerror = document.querySelector("#displayerror")
    dispalyerror.innerHTML="";




    var control = true;

if(  !allAlphabet("#Fname", "Firstname")){   // check first name
    control = false;}

if( !allAlphabet("#Lname", "Lastname")){  // check last name

    control = false;

}


if( !checkUser()){  // check user

    control = false;

}


if( !checkPassword()){  // check password

    control = false;

}

if( !repassword()){  // check repassword

    control = false;

}



if( !validselect()){  // check password

    control = false;

}




if(control){
alert("Success!! Sending User Info...")

}




return control;

}



function checkUser(){
var control = true;
var selectUser = document.querySelector("#username");
selectUser = selectUser.value;
//---------------------------------------
var firstchar = selectUser.toLowerCase();
if(firstchar.charAt(0) < "a" ||  firstchar.charAt(0) > "z"){ 
    displayErrorMessage("Username must start with a letter")
    document.querySelector("#username").focus();
    //countError++;
    control = false; }// check the first characters or not
///---------------------------------------
if(selectUser.length < 6){ 
    displayErrorMessage("Username must have at least 6 characters");
    document.querySelector("#username").focus();
    control = false;} //must be at least 6 characters long

return control

}

function checkPassword(){
var control = true;
var haschar = false;
var hasnum = false;
var selectInput = document.querySelector("#password");
selectInput = selectInput.value;
if(selectInput.length != 6){ 
    document.querySelector("#password").focus();
    displayErrorMessage("Password must be 6 characters long")
    control = false;} //must be 6 characters long
//---------------------------------------
var firstchar = selectInput.toLowerCase();
if(firstchar.charAt(0) < "a" ||  firstchar.charAt(0) > "z"){ 
    document.querySelector("#password").focus();
    displayErrorMessage("Password must start with a letter")
    control = false; }// check the first characters or not
/*---------------------------------------

} -------------------------------*/

var flag2 = false;
for(var i=0; i<selectInput.length; i++){

if(selectInput.charAt(i) >= "A" &&  selectInput.charAt(i) <= "Z"){ 
    flag2 = true;
    haschar = true; } // at least one upper case

}
if(!flag2){
    document.querySelector("#password").focus();
    displayErrorMessage("Password must be at least 1 uppercase")
}
//----------------
// at least one digits
var flag = true;
for(var i=0; i<selectInput.length; i++){

    if(selectInput.charAt(i) >= '0' &&  selectInput.charAt(i) <= '9'){ 
      
        hasnum = true;
        flag = false;
     }
    
    }

    if(flag){
        document.querySelector("#password").focus();
        displayErrorMessage("Password must be at least 1 digit")
   }


    if(!control || !haschar || !hasnum){

        return false;
    }

return true;


}








function allAlphabet(src,name) {
    var allAlphabet = true;
    var selectInput = document.querySelector(src);
    var input = selectInput.value.trim();
    var flag=false;

    if(input.charAt(0) < "A" ||  input.charAt(0) > "Z"){ // check the first cap or not
    displayErrorMessage(name+" must start with a cap")
    selectInput.focus();
    allAlphabet = false;

    }

    input = input.toLowerCase();
    for (var i = 0; i < input.length; i++)  // check if all alphabet
    {
         if (input.charAt(i) < "a" ||  input.charAt(i) > "z" )  { 
           
            allAlphabet = false;
            flag = true; }
    }  

    if(flag){
         displayErrorMessage(name+" only alphabet allowed.") 
            selectInput.focus();
    }
    
   

    if (!allAlphabet){ // if error
         return false;
    } 

    return true;
} 


function validselect(){
var inputselect = document.querySelector("#select");
inputselect = inputselect.value

if(inputselect==0){
    displayErrorMessage("Please Select Education Level")
    document.querySelector("#select").focus();
    return false;
}


return true;
}


function repassword(){
    var pw = document.querySelector("#password");
    var repw = document.querySelector("#password2");
    pw = pw.value;
    repw = repw.value;
    if( pw != repw){

        displayErrorMessage("Please re-enter the password") 
        document.querySelector("#password2").focus();
return false;
    }
return true;
}





function displayErrorMessage(src){

countError++;
    if(countError<=8){
        var dispalyerror = document.querySelector("#displayerror")
        var createh3 = document.createElement("h3")
        var errormsg = document.createTextNode(src)
        createh3.appendChild(errormsg);
        dispalyerror.appendChild(createh3);
}

}