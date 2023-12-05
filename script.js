"use strict";

let shoppingList = ["Apples", "Bananas", "Milk"];
////////////////////////////////
// Functions Implementation:

////////////////////////////////
// OUTPUT

/*
Shopping List:
1- Apples
2- Bananas
3- Milk
*/


const displayShoppingList=()=>{
    
   if(shoppingList.length){
    console.log("Shopping List:")   
    for(let i=0; i<shoppingList.length; i++){
     console.log(`${i+1}- ${shoppingList[i]}`)
    }
}else{
    console.log('array is empty')
}
    
};

displayShoppingList();

const getShoppingListAsString=()=>{
    if(shoppingList.length){
    let convertArrayToString= shoppingList.toString() 
    let result= `Shopping List: (${convertArrayToString})`
    console.log(result)
    }
    else{
    console.log('array is empty so you can not convert it')
    }

}

getShoppingListAsString(); // Shopping List: (Apples, Bananas, Milk)


const addItem=(product)=>{

    if(product){
    if(shoppingList.includes(product)){
     console.log(`${product} already in the list`)    
    }
 else{
   shoppingList.push(product)   
   console.log(`${product} added successfully`)    
    }
   }
    else{
   console.log("product is required")  
}
}

addItem("Apples"); // Apples already in the list.
addItem("Cheese"); // Cheese added successfully.
addItem("Eggs"); // Eggs added successfully.

