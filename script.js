let item = prompt("Enter a grocery item:");
let basePrice = Number(prompt(`What is the base price of ${item}?`)).toFixed(2);
let blackFri = (prompt("Is today 'Black Friday'? Answer yes or no.")).toLowerCase();
let searchEng = prompt(`Did you find ${item} through a search engine? Answer yes or no.`);
let shopComp = prompt(`Did you visit a comparison-shopping site? Answer yes or no.`);

let finalPriceYYY = ((basePrice*0.75) + (basePrice*0.01) - (basePrice*0.1)).toFixed(2);
let finalPriceYYN = ((basePrice*0.75) + (basePrice*0.01)).toFixed(2);
let finalPriceYNY = ((basePrice*0.75) - (basePrice*0.1)).toFixed(2);
let finalPriceYNN = ((basePrice*0.75)).toFixed(2);
let finalPriceNYY = ((basePrice * 1.01) - (basePrice*0.1)).toFixed(2);
let finalPriceNYN = ((basePrice * 1.01)).toFixed(2);
let finalPriceNNY = ((basePrice * 0.9)).toFixed(2);
let finalPriceNNN = basePrice


const mainMessage = `The base price for ${item} is ${basePrice}. `
const blackFriYes = "Since it's Black Friday, we will reduce the price by 25%. ";
const blackFriNo = "It's not Black Friday, so the price didn't change for that. ";
const searchEngYes = "We will increase the price by 1% to pay the search engine. ";
const searchEngNo = "The customer didn't use a search engine, so the price didn't change for that. ";
const shopCompYes = "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ";
const shopCompNo = "The customer didn't visit a comparison-shopping site, so the price didn't change for that. ";
const lastLineYYY = `The final price is ${finalPriceYYY}`;
const lastLineYYN = `The final price is ${finalPriceYYN}`;
const lastLineYNY = `The final price is ${finalPriceYNY}`;
const lastLineYNN = `The final price is ${finalPriceYNN}`;
const lastLineNYY = `The final price is ${finalPriceNYY}`;
const lastLineNYN = `The final price is ${finalPriceNYN}`;
const lastLineNNY = `The final price is ${finalPriceNNY}`;
const lastLineNNN = `The final price is ${finalPriceNNN}`;

if (blackFri === "yes") {
    if (searchEng === "yes") {
        if (shopComp === "yes") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriYes} ${searchEngYes} ${shopCompYes} ${lastLineYYY}`;
        } else if (shopComp === "no") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriYes} ${searchEngYes} ${shopCompNo} ${lastLineYYN}`;
        }
    } else if (searchEng === "no") {
        if (shopComp === "yes") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriYes} ${searchEngNo} ${shopCompYes} ${lastLineYNY}`;
        } else if (shopComp === "no") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriYes} ${searchEngNo} ${shopCompNo} ${lastLineYNN}`;
        }
    }
} else if (blackFri === "no") {
    if (searchEng === "yes") {
        if (shopComp === "yes") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriNo} ${searchEngYes} ${shopCompYes} ${lastLineNYY}`;
        } else if (shopComp === "no") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriNo} ${searchEngYes} ${shopCompNo} ${lastLineNYN}`;
        }
    } else if (searchEng === "no") {
        if (shopComp === "yes") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriNo} ${searchEngNo} ${shopCompYes} ${lastLineNNY}`;
        } else if (shopComp === "no") {
            document.getElementById("message").innerHTML = `${mainMessage} ${blackFriNo} ${searchEngNo} ${shopCompNo} ${lastLineNNN}`;
        }
    }
} 

