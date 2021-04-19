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

let ulElement = document.createElement('ul')



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


function Members(fname,lname,age,phone,type) {
    
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.phone = phone;
  this.type=type;
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
let lname =document.getElementById('lastName');
let age =document.getElementById('age');
let phone =document.getElementById('phoneNumber');
let male=document.getElementById('male')
let female=document.getElementById('female')
let type;


  fname =fname.value
  lname=lname.value
  age=age.value
  phone=phone.value


  let newsMember;
  if(male.checked)
  {
    type='male'
  }
  
  else
  {
    type='female'
  }
  
  newsMember= new Members(fname,lname,age,phone,type)

 // console.log(JSON.stringify(Members.member))
 let data = localStorage.getItem("member"); 

 if(data==null){
  console.log('data is null')
 }
 else{
 console.log(JSON.parse(data))
 }  

  localStorage.setItem("member", JSON.stringify(Members.member)); 
  render()
}


function render(){
  parent.textContent='';

 getData(); 
 
  parent.appendChild(ulElement);

  // const drinkLI = document.createElement('li');
  // const infoP = document.createElement('p');

  for(let i= 0 ; i < Members.member.length;i++)
{
  const drinkLI = document.createElement('li');
  const infoP = document.createElement('p');

  infoP.textContent = `Your name is : ${Members.member[i].fname} ${Members.member[i].lname} ,${Members.member[i].age} , ${Members.member[i].phone} ${Members.member[i].type}`;
  drinkLI.appendChild(infoP);
  orders.appendChild(drinkLI);

  console.log('test members num'+ Members.member.length)

}

 }





function getData()
{
  let data = localStorage.getItem("member"); //getting localstorage

  if(data !== null)
 {
 Members.member = JSON.parse(data);  

 }

 
}