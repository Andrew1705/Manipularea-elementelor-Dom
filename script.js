var user =document.querySelector("#user")
user.addEventListener('keyup' , function () {
  var u_times = document.querySelector('.u_times');
  var u_check = document.querySelector('.u_check');
  if (user.value.lenght == 0 || user.value.lenght < 6) {
      user.style.border = '1px solid red';
      u_times.style.display ='block';
      u_check.style.display ='none';
      return false;

  }else {
     user.style.border= '1px solid green';
     u_times.style.display ='block';
     u_check.style.display ='none';
  }
})

var pass =document.querySelector("#pass")
pass.addEventListener('keyup' , function () {
  var u_times = document.querySelector('.u_times');
  var u_check = document.querySelector('.u_check');
  if (user.value.lenght == 0 || user.value.lenght < 9) {
      user.style.border = '1px solid red';
      u_times.style.display ='block';
      u_check.style.display ='none';
      return false;

  }else {
     user.style.border= '1px solid green';
     u_times.style.display ='block';
     u_check.style.display ='none';
  }
})

function validate() {
  if (user.value == 0 || user.value.lenght < 6){
   document.getElementById('error').innerHTML='Please enter a valid password or username';
   return false;
  } else if (pass.value == 0 || pass.valaue.lenght < 9) {


    if (user.value == 0 || user.value.lenght < 6){
        document.getElementById('error').innerHTML='Please enter a valid password or username';
        return false;
    }else 
        alert('Successful login!')
  }}
