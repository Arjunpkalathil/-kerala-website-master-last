let firstname = document.getElementById("firstname");
let fname = document.getElementById("fname");
let lastname = document.getElementById("lastname");
let lname = document.getElementById("lname");
let email = document.getElementById("email").value;
let emailid = document.getElementById("emailid");


function validate(){

    if(firstname.value.trim()===""||lastname.value.trim()===""){

            fname.innerHTML = "First & Last name cannot be empty";
            lname.innerHTML = "First & Last name cannot be empty";
            fname.style.color = "red";
            lname.style.color = "red";
            return false;
         }
    
    else{
            fname.innerHTML = "First name entered";
            lname.innerHTML = "Last name entered";
            fname.style.color = "Green";
            lname.style.color = "Green";
            return true;
        }
        }

function validate1(){

       let email = document.getElementById("email").value;
       let emailid = document.getElementById("emailid");
       let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,8})(.[a-z]{2,3})?$/

    if(regexp.test(email))
    {
    emailid.innerHTML = "Email is Valid";
    emailid.style.color = "green";
    return true;
    }

    else

    {
    emailid.innerHTML = "Email is Invalid";
    emailid.style.color = "red";
    return false;
    }
    }


function validate2(){
      let mobilenumber = document.getElementById("mobnum").value;
      let mobilelabel = document.getElementById("mobnumid");


  let regexp2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
       if(regexp2.test(mobilenumber))
        {
           mobilelabel.innerHTML = "Mobile number is valid";
           mobilelabel.style.color = "green";
           return true;
        }
      else
        {
           mobilelabel.innerHTML = "Should be in format 860-608-4471 ,860.608.4471,860 608 4471";
           mobilelabel.style.color = "red";
           return false;
        }
        }


            // meter

        function validate3(){
          
            let label= document.getElementById("label");
            
            let password=document.getElementById("password");
            let x=password.value;
            console.log(x);
            var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

          
          if(regularExpression.test(x))
          { 
              console.log("valid");
              label.innerHTML = "Passsword is valid";
              label.style.color = "green";
              return true;
          }
          
          else
          { console.log("invalid");
              label.innerHTML = "Passsword is Invalid";
              label.style.color = "red";
              return false;
          
          }
          
          }
          
          

// function getPasswordStrength(password){
//     let s = 0;
//     if(password.length > 6){
//       s++;
//     }
//     if(password.length > 10){
//       s++;
//     }
//     if(/[A-Z]/.test(password)){
//       s++;
//     }
//     if(/[0-9]/.test(password)){
//       s++;
//     }
//     if(/[^A-Za-z0-9]/.test(password)){
//       s++;
//     }
//     return s;
//   }
//   document.querySelector(".pw-meter #password").addEventListener("focus",function(){
//     document.querySelector(".pw-meter .pw-strength").style.display = "block";
//   });
//   document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
//     let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
//     if(el.classList.contains("active")){
//       document.querySelector(".pw-meter #password").setAttribute("type","password");
//       el.classList.remove("active");
//     } else {
//       document.querySelector(".pw-meter #password").setAttribute("type","text");
//       el.classList.add("active");
//     }
//   });
  
//   document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
//     let password = e.target.value;
//     let strength = getPasswordStrength(password);
//     let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
//     strength = Math.max(strength,1);
//     passwordStrengthSpans[1].style.width = strength*20 + "%";
//     if(strength < 2){
//       passwordStrengthSpans[0].innerText = "Weak";
//       passwordStrengthSpans[0].style.color = "#111";
//       passwordStrengthSpans[1].style.background = "#d13636";
//     } else if(strength >= 2 && strength <= 4){
//       passwordStrengthSpans[0].innerText = "Medium";
//       passwordStrengthSpans[0].style.color = "#111";
//       passwordStrengthSpans[1].style.background = "#e6da44";
//     } else {
//       passwordStrengthSpans[0].innerText = "Strong";
//       passwordStrengthSpans[0].style.color = "#fff";
//       passwordStrengthSpans[1].style.background = "#20a820";
      
      
//     }
    
//   });



     
    


//  function validate2(){

//             let password = document.getElementById("pwd").value;
//             let passerror = document.getElementById("pass");
//           console.log(password);
//            let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
          
//           if(regexp1.test(password))
//           { console.log("valid");
//               passerror.innerHTML = " Passsword is valid";
//               passerror.style.color = "green";
//               return true;
//           }
//           else
//           { console.log("invalid");
//               passerror.innerHTML = "Passsword is Invalid";
//               passerror.style.color = "red";
//               return false;
          
//           }
          
//           }

