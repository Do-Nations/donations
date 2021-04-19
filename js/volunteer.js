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


function Members(fname,lname,age,phone,type, imageUpload) {
    
  this.fname = fname;
  this.lname = lname;
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
let lname =document.getElementById('lastName');
let age =document.getElementById('age');
let phone =document.getElementById('phoneNumber');
let male=document.getElementById('male')
let female=document.getElementById('female')
let type;
let imageUpload = document.getElementById('url');



  fname =fname.value
  lname=lname.value
  age=age.value
  phone=phone.value
  imageUpload=imageUpload.value


  let newsMember;
  if(male.checked)
  {
    type='male'
  }
  
  else
  {
    type='female'
  }
  
  newsMember= new Members(fname,lname,age,phone,type, imageUpload)

 // console.log(JSON.stringify(Members.member))
 let data = localStorage.getItem("member"); 

 if(data==null){
  console.log('data is null')
 }
 else{
//  console.log(JSON.parse(data))
 }  

  localStorage.setItem("member", JSON.stringify(Members.member)); 
  render()
}


// Uploading Image


function render(){
  parent.textContent='';
  
 getData(); 
 
  parent.appendChild(ulElement);

  // const drinkLI = document.createElement('li');
  // const infoP = document.createElement('p');

  for(let i= 0 ; i < Members.member.length;i++)
{
  const drinkLI = document.createElement('li');

  // let image = document.getElementById('imgURL');
  // image.src = imageUpload1;

  const infoP = document.createElement('p');







// console.log(imageUpload1)

  let imageUpload = document.createElement('img')
  drinkLI.appendChild(imageUpload)
  imageUpload.src = Members.member[i].imageUpload;
  imageUpload.style.width = '156px';

  
  infoP.textContent = `Your name is : ${Members.member[i].fname} ${Members.member[i].lname}, Age: ${Members.member[i].age}, Phone Number: ${Members.member[i].phone}, Gender: ${Members.member[i].type}`;
  drinkLI.appendChild(infoP);
  orders.appendChild(drinkLI);

  // console.log('test members num'+ Members.member.length)

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





let form=document.getElementById('confirm');

form.addEventListener('click',showItem);


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



function showItem (event)
{
    
    event.preventDefault();
    
  
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

    localStorage.setItem('image', imageUpload);

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


