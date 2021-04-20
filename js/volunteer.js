'use strict';
// Typing text above form
let i = 0;
let txt = ' Be a Volunteer !.'
let timespeed = 100;
let counter=0;
let listArray=[];



let paraghraph = document.getElementById("herotext")
const orders = document.getElementById('list');

let parent=document.getElementById('list')

let divElement = document.createElement('div')



addEventListener('DOMContentLoaded', slowwrite)

function slowwrite() {

  if (i < txt.length) {
    paraghraph.innerHTML += txt.charAt(i)
    i++
    setTimeout(slowwrite, timespeed)
  }

}


// End of typing text above form

// check Which office checked
// let zarqa = document.getElementById('zarqa');
// let amman = document.getElementById('amman');
// let irbid = document.getElementById('irbid');

// // Lists dummy Data .
// let zarqalist = document.getElementById('zarqa-list');
// let ammanlist = document.getElementById('amman-list');
// let irbidlist = document.getElementById('irbid-list');

// list.addEventListener('click', showloc);


// Select-button 


// Start now today 


function Members(fname,age,phone,type, imageUpload) {
    
  this.fname = fname;
  // this.lname = lname;
  this.age = age;
  this.phone = phone;
  this.type=type;
  this.imageUpload = imageUpload;
  Members.member.push(this)
}


Members.member=[]
//console.log(fname)
//const bahaa=new Members('bahaa', 'bahaa','bahaa','15','20','Male');

render()
let list = document.getElementById('submitzz');

list.addEventListener('click', showlist);



function showlist(event) {

  event.preventDefault();

let fname =document.getElementById('firstName');
// let lname =document.getElementById('lastName');
let age =document.getElementById('age');
let phone =document.getElementById('phoneNumber');
let male=document.getElementById('male')
let female=document.getElementById('female')
let type;
let imageUpload = document.getElementById('url');



  fname =fname.value
  // lname=lname.value
  age=age.value
  phone=phone.value
  imageUpload=imageUpload.value


  let newsMember;
  if(male.checked)
  {
    type='male';
  }
  
  else if(female.checked)
  {
    type='female';
  }
  else{
    type='';
  }
  
  newsMember= new Members(fname,age,phone,type, imageUpload)

 // console.log(JSON.stringify(Members.member))
 let data = localStorage.getItem("member"); 

//  if(data==null){
//   console.log('data is null')
//  }
//  else{
// //  console.log(JSON.parse(data))
//  }  

  localStorage.setItem("member", JSON.stringify(Members.member)); 
  render()
}


// Uploading Image


function render(){
  divElement.textContent='';
  
 getData(); 

 
  parent.appendChild(divElement);



  for(let i= 0 ; i < Members.member.length;i++)
{
  let diviMini=document.createElement('div');
  diviMini.setAttribute('class','user-cart');
  let paraghh = document.createElement('p');

  let imageUpload = document.createElement('img');
  imageUpload.src = Members.member[i].imageUpload;
  imageUpload.style.width = '250px';
  // imageUpload.style.height = '220px';

  paraghh.innerHTML = ` Name : ${Members.member[i].fname} ${Members.member[i].lname},
  <br> Age: ${Members.member[i].age}, <br>
  Phone : ${Members.member[i].phone}, <br>
   Gender: ${Members.member[i].type} <br>`;

  diviMini.appendChild(paraghh);
  diviMini.appendChild(imageUpload);



  divElement.appendChild(diviMini);

  

  //  divElement.appendChild(paraghh)


  // console.log('test members num'+ Members.member.length)



let test =document.getElementById('firstName').required = true;


 }





function getData()
{
  let data = localStorage.getItem("member"); //getting localstorage

  if(data !== null)
 {
 Members.member = JSON.parse(data);  
}

 
}




let form=document.getElementById('confirm');

form.addEventListener('onclick',showItem);


let zarqa=document.getElementById('zarqa');
let amman=document.getElementById('amman');
let irbid=document.getElementById('irbid');


let zarqalist=document.getElementById('zarqa-list');

let ammanlist=document.getElementById('amman-list');
let irbidlist=document.getElementById('irbid-list');
let eventform= document.getElementById('volunteerform')

function showItem (event)
{
    
    event.preventDefault();
    
  
    if(zarqa.checked===true)
    {
        zarqalist.style.display = "inline-block";
    }
    else
    {
      zarqalist.style.display = "none";

    }

    if (amman.checked===true)
    {
        ammanlist.style.display = "inline-block";
        
    }

    else
    {
      ammanlist.style.display = "none";

    }


    
    if(irbid.checked===true)
    {
irbidlist.style.display = "inline-block";
    }
    else
    
    {
  irbidlist.style.display = "none";
      }
    
}
}
