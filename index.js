// Write your solution in this file!
// customerManagement.js

// Declare customerName in the global scope
window.customerName = 'bob';

// Function to modify customerName to uppercase
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(name) {
    window.bestCustomer = name;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function that attempts to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another person'; // This will throw an error
}
