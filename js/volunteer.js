'use strict' ;


let i = 0;
let txt = ' Please Fill out the below Form.'
let timespeed = 100;

let paraghraph=document.getElementById("herotext")

addEventListener('DOMContentLoaded', slowwrite)

function slowwrite() {

  if (i < txt.length) {
    paraghraph.innerHTML += txt.charAt(i)
    i++
    setTimeout(slowwrite, timespeed)
  }


}




let list=document.getElementById('submitzz');

list.addEventListener('click',showlist);


let zarqa=document.getElementById('zarqa');
let amman=document.getElementById('amman');
let irbid=document.getElementById('irbid');


let zarqalist=document.getElementById('zarqa-list');

let ammanlist=document.getElementById('amman-list');
let irbidlist=document.getElementById('irbid-list');
let eventform= document.getElementById('volunteerform')

let firstName;
let lastName;
let age;
let phoneNumber;



function showlist (event)
{
    
    event.preventDefault()
    
    eventform.style.display = "none";
    if(zarqa.checked===true)
    {
        zarqalist.style.display = "block";
    }

    if (amman.checked===true)
    {
        ammanlist.style.display = "block";
        
    }
    
    if(irbid.checked===true)
    {
irbidlist.style.display = "block";
}
      

    
firstName = document.getElementById("firstName").value
    
    localStorage.setItem('name',firstName);

    lastName = document.getElementById("lastName").value
    localStorage.setItem('lname',lastName);

    age = document.getElementById("age").value
    localStorage.setItem('age',age);

    phoneNumber = document.getElementById("phoneNumber").value
    localStorage.setItem('phoneNumber',phoneNumber);
    
    
}
let data =localStorage.getItem('name');
let data2 =localStorage.getItem('lname');
let data3 =localStorage.getItem('age');
let data4 =localStorage.getItem('phoneNumber');

document.getElementById("firstName").value =  data;
document.getElementById("lastName").value =  data2;
document.getElementById("age").value =  data3;
document.getElementById("phoneNumber").value =  data4;


