'use strict' ;


let list=document.getElementById('submitzz');

list.addEventListener('click',showlist);


let zarqa=document.getElementById('zarqa');
let amman=document.getElementById('amman');
let irbid=document.getElementById('irbid');


let zarqalist=document.getElementById('zarqa-list');

let ammanlist=document.getElementById('amman-list');
let irbidlist=document.getElementById('irbid-list');
let eventform= document.getElementById('volunteerform')



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
      
}