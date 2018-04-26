

function printError(text){

    document.querySelector("#errors").innerHTML+=text;

}

function errorCleaner(){

    document.querySelector("#errors").innerHTML="";

}

function formCheck(){

    errorCleaner();

    var check = passwordCheck();

    var check2 = usernameCheck();

    var check4 = streetNameCheck();

    var check5 = cityNameCheck();

    return check&&check2&&check4&&check5;



}

function usernameCheck(){

var username = document.signup.username.value.trim();

var usernameLength = username.length;

var error=true;

var letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$*()!=+-/"

var errorOfUsername = "Username must start with a letter and must have at least 6 charachters";

var letterChecker=0

if(letters.indexOf(username.substr(0,1)) >= 0){

    letterChecker=1;

}

if(letterChecker!=1){

    printError("<p>"+errorOfUsername+"</p>");

    error=false;

}

var counter=0

for( var i =0; i < usernameLength; i++){

    if(characters.indexOf(username.substr(i,1)) >= 0){

        counter++;
    }

}

if(counter < 6){

    printError("<p>"+errorOfUsername+"</p>");

    error=false;

}

if(!error){

    return false;

}else{

    return true;

}

}

function passwordCheck(){

var error=true;

var password = document.signup.password.value.trim();

var repassword = document.signup.repassword.value.trim();

var passwordLength = password.length;

var digits="1234567890";

var letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var charachters = "@#$*()!=+-/";

var errorOfPassword = "Password must be 8 characters long, must start with a character and must have at least one UpperCase and one digit";

var errorOfPasswordLength="Password is small";

var errorOfRePassword = "Passwords don't match";

if(passwordLength<8){

    printError("<p>"+errorOfPasswordLength+"</p>");

    error=false;

}

if(password!=repassword){

    printError("<p>"+errorOfRePassword+"</p>");

    error=false;

}

var uppercaseChecker=0;

for(var i = 0; i < passwordLength; i++){

    if(letters.indexOf(password.substr(i,1)) >= 0){

        uppercaseChecker = 1;

        break;

    }

}

if(uppercaseChecker!=1){

    printError("<p>"+errorOfPassword+"</p>");

    return false;

}


var digitChecker=0;

for(var i = 0; i < passwordLength; i++){

    if(digits.indexOf(password.substr(i,1)) >= 0){

        digitChecker=1;

        break;

    }

}

if(digitChecker!=1){

    printError("<p>"+errorOfPassword+"</p>");

    error=false;

}

if(!error){

    return false;

}else{

    return true;

}

}


function cityNameCheck(){

    var check= true;

    var city = document.signup.city.value.trim();

    var letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var errorOfCityField="City Field must have letters only";

    var errorChecker=0;

    for(var i = 0; i < city.length; i++){

        if(letters.indexOf(city.substr(i,1)) >= 0){

            errorChecker=1;

        }else{

            errorChecker=0;

            break;
        }

    }

        if(errorChecker==0){

            check= false;

            printError("<p>"+errorOfCityField+"</p>");

        }

        if(!check){

            return false;

        }else{

            return true;

        }
}

function streetNameCheck(){

    var street= document.signup.streetName.value.trim();

    var digits="1234567890";

    var errorOfStreetName = "Street Name should not have any digit";

    var check = 0;

    var error = true;

    for(var i =0 ; i < street.length; i++){

        if(digits.indexOf(street.substr(i,1)) >= 0){

            check=1;

            error= false;

            break;

        }

    }

    if(check==1){

        printError("<p>"+errorOfStreetName+"</p>");

        error= false;

    }

    if(!error){
    
        return false;
    
    }else{
       
        return true;

    }




}