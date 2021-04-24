
let products = localStorage.getItem('Products');
products = JSON.parse(products);
// console.log('This is my product list', products);


function megaSum() {
    let all = 0;
    for (let i = 0; i < products.length; i++) {
        all += products[i].total;

    }
    console.log(all, 'this all');
    return all;
}

function listProduct() {

    let parent = document.getElementById('table');
    console.log(parent);
    // parent.setAttribute('style','display:flex;');
    // let productForm = document.createElement('form');
    // parent.appendChild(productForm);
    // // aLL  tOTAL ELEMENT
    // let all = document.getElementById('all');
    // let megaTotal = megaSum(); 
    console.log(products)

    if(products===null){       

        let main=document.getElementById('main');
        main.textContent='Cart is Empty';
        sbmitted.textContent='Thanks'
    }else{    
        for (let i = 0; i < products.length; i++) {

            if (products[i].purshaceNo != 0) {            
                // parent.setAttribute('style','display:block');
                // set the initial value of t
                products[i].total = products[i].price;
                megaTotal = megaSum();
                all.innerHTML = `Total: ${megaTotal}  JOD`;
                            
                // Create the table row
                let row = document.createElement('tr');
                parent.appendChild(row);
                // creat the first cell of the row-name 
                detailName=document.createElement('td');
                row.appendChild(detailName);
                detailName.textContent=products[i].name;
                // crerate the 2nd detail-photos
                detailPhoto=document.createElement('td');
                row.appendChild(detailPhoto);            
                let productImage = document.createElement('img');
                detailPhoto.appendChild(productImage);
                productImage.setAttribute('src', products[i].url);
                
                // cretae the 3rd detail-unit price
                detailPrice=document.createElement('td');
                row.appendChild(detailPrice);
                detailPrice.textContent=products[i].price+ ' JOD';
                // create the 4th detail-number of items
                let itemNo= document.createElement('input');
                row.appendChild(itemNo);
                itemNo.setAttribute('type', 'number');
                itemNo.setAttribute('name', products[i].name);
                itemNo.setAttribute('value', '1');
                itemNo.setAttribute('min', '0');
                // itemNo.setAttribute('max', '5');
                
                
                // create the 5th detail-total price including the change event. 
                detailtotal=document.createElement('td');
                row.appendChild(detailtotal);
                detailtotal.setAttribute('id',products[i].name);
                detailtotal.textContent=products[i].price+ ' JOD';

                
                
            
                // // itemNo.setAttribute('change',total(this.value));
                

                // add event of change 
                itemNo.addEventListener("change", total);

                // Add Total for each product 
                // let totalPriceLabel = document.createElement('label');
                // totalPriceLabel.setAttribute('for', products[i].name);
                // divisons.appendChild(totalPriceLabel);
                // totalPriceLabel.textContent = 'Total:' + products[i].price

                function total(event) {
                    console.log(event.target);
                    let changedIndex = products.indexOf(event.target.name);
                    let ourtarget = document.getElementById(event.target.name);
                    let value = itemNo.value * products[i].price;
                    console.log(value);
                    ourtarget.textContent = value + ' JOD';
                    products[i].total = value;
                    products[i].purshaceNo = itemNo.value;
                    console.log('The total quantity', products[i].purshaceNo);
                    megaTotal = megaSum();
                    all.innerHTML = `Total: ${megaTotal} JOD`;
                }
            }
        }
    }

   

   
    // crete the checkout button
    let sbmitted = document.createElement('input');
    sbmitted.setAttribute('type', 'button');
    sbmitted.setAttribute('name', 'submit');
    sbmitted.setAttribute('value', 'Checkout');
    sbmitted.setAttribute('id', 'checkout');
    main.appendChild(sbmitted);

    // event related to submitt buttom

    sbmitted.addEventListener('click',checkout);

    function checkout(event){
        localStorage.clear();
        event.preventDefault();
        // alert('Thanks for your donation\n your total purchase value is '+ megaTotal+' JoD');
        Swal.fire(
            'Thank You For Your Purchase!',
            'Your Money Will Help People in Need!',
            'success'
          );
        let thElement=document.getElementById('th');
        console.log(thElement);
        let main=document.getElementById('main');
        main.textContent='Cart is Empty';
        
    }
}
listProduct();
