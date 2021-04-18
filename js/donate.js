'use strict';
let products=[];
let sbmitted='';

// This is to create object/constructive function  for each photo 
function product(name,url,price){
    this.name=name;
    this.url=url; 
    this.price=price;
    this.purshaceNo=0
    products.push(this);    
}

// This to create the instances -products 

new product('Pottery Jar','../img/donation/Pottery\ jar.jpg',20);
new product('Natural Organic Soap','../img/donation/soap.jpg',5);
new product('Puppet','../img/donation/puppet.jpg',15);
new product('Handmade Tote Bags','../img/donation/Bag.jpg',7);
new product('Handmade Leather Wallet','../img/donation/ Wallet.jpg',25);
new product('Floral Dinnerware Sets','../img/donation/Dinnerware.jpg',15);
console.log(products);
// This to invoke the ID of the HTML element: 
let parent=document.getElementById('main');
// console.log(parent);
let parentProduct=document.getElementById('sd1');
// console.log(parentProduct);
let parentMoney=document.getElementById('sd2');
// console.log(parentMoney);
// create form element
let productForm=document.createElement('form');
parentProduct.addEventListener('click',showProduct);
function showProduct(event){
    parent.removeChild(parentProduct);
    parent.removeChild(parentMoney);    
    parent.appendChild(productForm);
    for (let i=0;i<products.length;i++){
        // this to create the label element and its attributes for,content=image
        let productLable=document.createElement('label');
        productLable.setAttribute('for',products[i].name);
        let productImage=document.createElement('img');
        productLable.appendChild(productImage);
        productImage.setAttribute('src',products[i].url);
        productForm.appendChild(productLable);        
        
        // This is to creat the input element and add its attribute.
        let checkpointProduct=document.createElement('input');
        checkpointProduct.setAttribute('name',products[i].name);
        checkpointProduct.setAttribute('type','checkbox');        
        productForm.appendChild(checkpointProduct);
        // checkpointProduct.setAttribute('style',':hover:${products[i].name}');      

        
    }
    
    let linkCart=document.createElement('a'); 
    linkCart.setAttribute('href','../html/cart.html');
    productForm.appendChild(linkCart);

    let sbmitted=document.createElement('input');
    sbmitted.setAttribute('type','submit');
    sbmitted.setAttribute('name','submit');
    sbmitted.setAttribute('value','Cart');
    linkCart.appendChild(sbmitted);    

}
productForm.addEventListener('submit',updatePurshase);

// function updatePurshase(event){
    
    

// }