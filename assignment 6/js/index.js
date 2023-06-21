function check(form) { 
  if(form.id1.value == "admin" && form.pswd1.value == "123") {
      window.open('main.html');
  }
  else {
      alert("Error Password or Username");
  }
}
// document.onload = function(){
//   var sname=document.getElementById("studentname");
//   var fname=document.getElementById("fathername");
//   var dob=document.getElementById("dob");
//   var address=document.getElementById("address");
//   var interests=document.getElementById("interests");
//   var roll=document.getElementById("roll");
//   var standard=document.getElementById("standard");
//   var submitButton=document.getElementById("submit");
//   var retrieveButton=document.getElementById("retrieve");
// };


// function saveResponses() {

// 	localStorage.setItem("studentname", sname.value);
// 	localStorage.setItem("fathername", fname.value);
//   localStorage.setItem("dob", dob.value);
//   localStorage.setItem("address", address.value);
// 	localStorage.setItem("interests", interests.value);
//   localStorage.setItem("roll", roll.value);
//   localStorage.setItem("standard", standard.value);

// }

// function retrieveResponses() {
//   window.open('table.html');
// 	sname.value = localStorage.getItem("studentname");
//   fname.value = localStorage.getItem("fathername");
//   dob.value = localStorage.getItem("dob");
//   address.value=localStorage.getItem("address");
//   interest.value=localStorage.getItem("interests");
//   rollNo.value=localStorage.getItem("roll");
//   standard.value=localStorage.getItem("standard");
// }