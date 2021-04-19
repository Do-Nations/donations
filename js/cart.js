
let products = localStorage.getItem('Products');
products = JSON.parse(products);
console.log('This is my product list', products);


function megaSum() {
    let all = 0;
    for (let i = 0; i < products.length; i++) {
        all += products[i].total;

    }
    console.log(all, 'this all');
    return all;
}

function listProduct() {

    let parent = document.getElementById('main');
    console.log(parent);
    let productForm = document.createElement('form');
    parent.appendChild(productForm);
    // aLL  tOTAL ELEMENT
    let all = document.getElementById('all');
    let megaTotal = megaSum();

    for (let i = 0; i < products.length; i++) {

        if (products[i].purshaceNo != 0) {
            // set the initial value of t
            products[i].total = products[i].price;
            megaTotal = megaSum();
            all.innerHTML = `Total: ${megaTotal}`;

            let divisons = document.createElement('div');
            divisons.setAttribute('class', 'box');
            productForm.appendChild(divisons);
            // Create image elemnt holds all attributes
            let productImage = document.createElement('img');
            divisons.appendChild(productImage);
            productImage.setAttribute('src', products[i].url);
            // create h4 element that includes the name of product
            let productDescription = document.createElement('h4');
            productDescription.textContent = products[i].name;
            divisons.appendChild(productDescription);
            // For show the item unit price 
            let unitprice = document.createElement('h4');
            // productLable.setAttribute('for',products[i].name);       
            divisons.appendChild(unitprice);
            unitprice.textContent = 'Unit Price:' + products[i].price + ' JOD';
            // create input element to enter number of items 
            // Its label 
            let itemNoLabel = document.createElement('label');
            itemNoLabel.setAttribute('for', products[i].name);
            divisons.appendChild(itemNoLabel);
            itemNoLabel.textContent = 'Quantity';
            // input
            let itemNo = document.createElement('input');
            itemNo.setAttribute('type', 'number');
            itemNo.setAttribute('name', products[i].name);
            itemNo.setAttribute('value', '1')
            // itemNo.setAttribute('change',total(this.value));
            // itemNo.setAttribute('value','number');
            divisons.appendChild(itemNo);

            // add event of change 
            itemNo.addEventListener("change", total);

            // Add Total for each product 
            let totalPriceLabel = document.createElement('label');
            totalPriceLabel.setAttribute('for', products[i].name);
            divisons.appendChild(totalPriceLabel);
            totalPriceLabel.textContent = 'Total:' + products[i].price

            function total(event) {
                // return itemNo.value*products[i].price;
                let value = itemNo.value * products[i].price;
                console.log(value);
                totalPriceLabel.textContent = 'Total:' + value + 'JOD';
                products[i].total = value;
                products[i].purshaceNo = itemNo.value;
                console.log('The total quantity', products[i].purshaceNo);
                megaTotal = megaSum();
                all.innerHTML = `Total: ${megaTotal}`;
            }

        }



    }

    let divi = document.createElement('div');
    divi.setAttribute('class', 'subm');
    productForm.appendChild(divi);

    let linkCart = document.createElement('a');
    linkCart.setAttribute('href', '../html/cart.html');
    divi.appendChild(linkCart);

    let sbmitted = document.createElement('input');
    sbmitted.setAttribute('type', 'submit');
    sbmitted.setAttribute('name', 'submit');
    sbmitted.setAttribute('value', 'Checkout');
    linkCart.appendChild(sbmitted);


    // productForm.addEventListener('submit',updatePurshase);

    // function updatePurshase(event){
    //     localStorage.clear();
    //     event.preventDefault();
    //     // targ=JSON.stringify(event.target);
    //     console.log('This is the event',event);    

    //     for (let i=0;i<products.length;i++){
    //         let TorF =event.target[i].checked;
    //         if (TorF==true){
    //             products[i].purshaceNo++;
    //             console.log(products[i].purshaceNo);             
    //         }
    //     }
    //     let stringProduct=JSON.stringify(products)
    //     localStorage.setItem('Products',stringProduct);


    // }

}
listProduct();
