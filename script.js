let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});
function val(){
  var where = document.form.whre.value;
  var guest = document.form.guess.value;
  var arrival = document.form.arr.value;
  var leving = document.form.lev.value;
  var hotel = document.form.stay.value;
  if(where ==""){
    alert("You should enter the Destination..!");
    return false;
  }
  if(where == null){
      alert("Invalid destination..")
  }
  if(guest ==""){
    alert("You should enter Number of guest..!");
    return false;
  }
  if(guest == 0){
    alert("Invalid number of guests..!");
    return false;
  }
  if(guest < 0){
    alert("Invalid number of guests..!");
    return false;
  }
  if(arrival ==""){
    alert("You should enter arrival date..!");
    return false;
  }
  if(leving ==""){
    alert("You should enter leaving date..!");
    return false;
  }
  if(hotel==0){
    alert("Select Hotel stay option..");
    return false;

  }
  else{
    alert("You have Booked successfully..")
  }
  }
function validate(){
var uname = document.form1.name.value;
var mail = document.form1.email.value;
var number = document.form1.num.value;
var sub = document.form1.subject.value;

if(uname=="" || uname == null || uname <8){
alert("Enter valid Name..!!");
return false;
}
if(mail=="" || mail == ".com"){
alert("Enter valid mail");
return false;
}
if(number=="" || number <10){
alert("Enter valid Phone number");
return false;
}
if(sub==""){
alert("Enter Subject..");
return false;
}
else{
  alert("You have subscribed successfully..");
}
}
jQuery(document).ready(function($){
  var $slickElement = $('.slideshow');

  $slickElement.slick({
    autoplay: true,
    dots: false,
  });

});
function valid(){
  var name1 = document.form2.fname.value;
  var name2 = document.form2.lname.value;
  var mail1 = document.form2.email1.value;
  var number1 = document.form2.phone1.value;
  var gen = document.form2.gender.value;
  var pswd = document.form2.pass.value;
  var repass = document.form2.rpass.value;
  
  if(name1=="" || name1 == null || name1 <8){
  alert("Enter First Name..!!");
  return false;
  }
  if(name2=="" || name2 == null || name2 <8){
    alert("Enter Last Name..!!");
    return false;
    }
  if(mail1=="" || mail1 == ".com"){
  alert("Enter valid mail");
  return false;
  }
  if(number1==""){
  alert("Enter valid Phone number");
  return false;
  }
  if(gen == 0){
  alert("Select Gender..");
  return false;
  }
  if(pswd == ""){
    alert("Invalid Password");
    return false;
  }
  if(repass == "" || repass.length<10){
    alert("Invalid RePassword");
    return false;
  }
  if(pswd!==repass){
      alert("Password and Repassword doesnt match..");
      return false;
    }
    else{
      alert("You have registered successfully.");
      return;
    }
  }
  function vali(){
    var user = document.form3.use.value;
    var psw = document.form3.pas.value;
    if(user=="ashwin" || user=="eswar"|| user=="hemant"|| user=="sathya"|| user=="manoj"|| user=="sai"){
      if(psw=="12345"){
        alert("You have logged in successfully..");
      }
    else{
      alert("Invalid Login credentials.!!");
      return false;
    }
    }
  }
  