let item = prompt("Enter a grocery item:");
let price = prompt(`What is the base price of ${item}?`);
let basePrice = Number(price).toFixed(2);
// let basePrice = numPrice.toFixed(2);
let finalPriceYYY = ((basePrice*0.75) + (basePrice*0.01) - (basePrice*0.1)).toFixed(2);
let finalPriceYYN = ((basePrice*0.75) + (basePrice*0.01)).toFixed(2);
let finalPriceYNY = ((basePrice*0.75) - (basePrice*0.1)).toFixed(2);
let finalPriceYNN = ((basePrice*0.75)).toFixed(2);
let finalPriceNYY = ((basePrice*1.01) - (basePrice*0.1)).toFixed(2);
let finalPriceNYN = ((basePrice*1.01)).toFixed(2);
let finalPriceNNY = ((basePrice*1.1)).toFixed(2);
let finalPriceNNN = basePrice


let bf = prompt("Is today 'Black Friday'? Answer yes or no.");
let seProduct = prompt(`Did you find ${item} through a search engine? Answer yes or no.`);
let shopCompare = prompt(`Did you visit a comparison-shopping site? Answer yes or no.`);


const mainMessage = `The base price for ${item} is ${basePrice}. `
const blackFriYes = "Since it's Black Friday, we will reduce the price by 25%. ";
const blackFriNo = "It's not Black Friday, so the price didn't change for that. ";
const searchEngYes = "We will increase the price by 1% to pay the search engine. ";
const searchEngNo = "The customer didn't use a search engine, so the price didn't change for that. ";
const shopCompYes = "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. ";
const shopCompNo = "The customer didn't visit a comparison-shopping site, so the price didn't change for that. ";
let lastLineYYY = `The final price is ${finalPriceYYY}`;
let lastLineYYN = `The final price is ${finalPriceYYN}`;
let lastLineYNY = `The final price is ${finalPriceYNY}`;
let lastLineYNN = `The final price is ${finalPriceYNN}`;
let lastLineNYY = `The final price is ${finalPriceNYY}`;
let lastLineNYN = `The final price is ${finalPriceNYN}`;
let lastLineNNY = `The final price is ${finalPriceNNY}`;
let lastLineNNN = `The final price is ${finalPriceNNN}`;

if (bf === "yes") {
    let yesbf = `${mainMessage} ${blackFriYes}`;
    document.getElementById("message").innerHTML = yesbf;
    if (seProduct === "yes") {
        let seProductYes = `${yesbf} ${searchEngYes}`;
        document.getElementById("message").innerHTML = seProductYes;
        if (shopCompare === "yes") {
            let shopCompareYes = `${seProductYes} ${shopCompYes} ${lastLineYYY}`;
            document.getElementById("message").innerHTML = shopCompareYes;
        } else if (shopCompare === "no") {
            let shopCompareNo = `${seProductYes} ${shopCompNo} ${lastLineYYN}`;
            document.getElementById("message").innerHTML = shopCompareNo;
        }
    } else if (seProduct === "no") {
        let seProductNo = `${yesbf} ${searchEngNo}`;
        document.getElementById("message").innerHTML = seProductNo;
        if (shopCompare === "yes") {
            let yesNoYes = `${seProductNo} ${searchEngYes} ${lastLineYNY}`
            document.getElementById("message").innerHTML = yesNoYes
        } else if (shopCompare === "no") {
            let yesNoNo = `${seProductNo} ${searchEngNo} ${lastLineYNN}`;
        }
    }
} else if (bf === "no") {
    let nobf = `${mainMessage} ${blackFriNo}`;
    document.getElementById("message").innerHTML = nobf;
    if (seProduct === "yes") {
        let noYes = `${nobf} ${searchEngYes}`;
        document.getElementById("message").innerHTML = noYes;
        if (shopCompare === "yes") {
            let noYesYes = `${noYes} ${shopCompYes} ${lastLineNYY}`;
            document.getElementById("message").innerHTML = noYesYes;
        } else if (shopCompare === "no") {
            let noYesNo = `${noYes} ${shopCompNo} ${lastLineNYN}`;
            document.getElementById("message").innerHTML = noYesNo;
        }
    } else if (seProduct === "no") {
        let noNo = `${nobf} ${searchEngNo}`;
        document.getElementById("message").innerHTML = noNo;
        if (shopCompare === "yes") {
            let noNoYes = `${noNo} ${shopCompYes} ${lastLineNNY}`;
            document.getElementById("message").innerHTML = noNoYes;
        } else if (shopCompare === "no") {
            let noNoNo = `${noNo} ${shopCompNo} ${lastLineNNN}`;
            document.getElementById("message").innerHTML = noNoNo;
        }
    }
} 

