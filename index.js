// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        //debugger;
    }

    return gifts;
}

wrapGifts(gifts);*/
const names = ['Susan', 'Benjamin', 'Olive', 'Samantha'];

function writeCards(names, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        //debugger;
    }
    return thankYouCards
}

//const thankYouCards = writeCards(names, 'Cake Day');
//console.log(thankYouCards);

function countDown(number) {
    number = Math.abs(number);
    while (number >= 0) {
        console.log(number);
        number -= 1;
    }
}

countDown(-5);