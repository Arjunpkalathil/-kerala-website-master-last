        //   --  //  Email validation//--
let email = document.getElementById("email");
let error = document.getElementById("error");
let password = document.getElementById("pwd");
let passerror = document.getElementById("pass");


function validate(){
 if(email.value.trim()===""||password.value.trim()===""){
   error.innerHTML = "Field cannot be empty";
   error.style.color = "red";
   return false;

 }
 else{
   return true;
 }
}
function validate1(){
  let email = document.getElementById("email").value;
  let error = document.getElementById("error");
  
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,3})?$/
  if(regexp.test(email)){
    error.innerHTML = "Email is Valid";
    error.style.color = "green";
    return true;
   }
   else{
    error.innerHTML = "Email is Invalid";
    error.style.color = "red";
    return false;
   }
}

 
// function validate1(){
 

// console.log("arjun");
// if( password.value.trim()==="")   
// {   console.log("entered")
//     passerror.innerHTML = "Password field cannot be empty";
//     passerror.style.color = "red";
//     return false;
    
// }
// else{
//   return true;
// }


// }

// ---// Password validation//--


// function validate2(){
//    if(pwd.value=="")
//    {
//        pass.innerHTML = "cannot be empty";
//        pass.style.color = "red";
//        return false;
//    }
//    else if(pwd.value.length<8)
//    {
//        pass.innerHTML = "min 8 chara required";
//        pass.style.color = "red";
//        return false;
   
//    }
//    else if(pwd.value){
//        return true;

//    }

//    let regexp = /^([A-Za-z0-9]{1,2})$/
//    if(regexp.test(pass.value))
//    {
//     capital.innerHTML = "valid";
//     capital.style.color = "green";
//     return true;
//    }
//     else{
//     capital.innerHTML = "Atleast one upercase and one lower case needed";
//     capital.style.color = "green";
//     return false;
//    }
//  }




function validate2(){
  let password = document.getElementById("pwd").value;
  let passerror = document.getElementById("pass");
console.log(password);
 let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

if(regexp1.test(password))


{ console.log("valid");
    passerror.innerHTML = " Passsword is valid";
    passerror.style.color = "green";
    return true;
}

else
{ console.log("invalid");
    passerror.innerHTML = "Passsword is Invalid";
    passerror.style.color = "red";
    return false;

}

}
