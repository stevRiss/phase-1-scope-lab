// Write your solution in this file!

var customerName = "bob";


function fixScope(){

    return customerName;
}
////console.log(fixScope(customerName));



function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //return upperName.toUpperCase();
    return customerName;
}
//console.log(upperCaseCustomerName(customerName)); 

var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}
//console.log(setBestCustomer())

function overwriteBestCustomer(overwrite){
    overwrite = 'maybe bob';
    bestCustomer = overwrite;
    return bestCustomer;
}
//console.log(overwriteBestCustomer());

const leastFavoriteCustomer = "betty";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'bob';
    return leastFavoriteCustomer;

}
//console.log(changeLeastFavoriteCustomer());


//win for today;
//struggle for today
//most beautiful place iv been 