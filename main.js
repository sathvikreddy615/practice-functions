// Chicken Monkey Challenge

// let oneToHundred = [];
// let hundred = 100;

// const chickenMonkey = () => {
//     for (let i = 1; i < hundred; i++) {
//         oneToHundred.push([i]);
//     }

//     let chicken = "Chicken";
//     let monkey = "Monkey";
//     let chickenMonkey = "Chicken Monkey";
    
//     for (let i = 0; i < oneToHundred.length; i++) {
//         if ((oneToHundred[i] % 5 === 0) && (oneToHundred[i] % 7 === 0)) {
//             console.log(chickenMonkey);
//         } else if (oneToHundred[i] % 5 === 0) {
//             console.log(chicken);
//         } else if (oneToHundred[i] % 7 === 0) {
//             console.log(monkey);
//         } else {
//             console.log(oneToHundred[i]);
//         } 
//     }
// }

// chickenMonkey();

// Take a Number - Battle of the Bands Challenge

let bandNumber = 0;

const bandID = name => {
    bandNumber++
    console.log(`${bandNumber}. ${name}`);
}
bandID("Fleet Foxes");
bandID("RHCP");
bandID("Nirvana");
bandID("Rolling Stones");

// Overly Excited Challenge

