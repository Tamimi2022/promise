const farid1 = Promise.resolve("Hello World!");
const farid2 = 20;
const farid3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, "Good Luck"));
const farid4 = 50;
Promise.all([farid1, farid2, farid3, farid4]).then(values => console.log(values));

// Promise Make, use, understand
const santaIsGenerous = true;

 // Make a promise (so you don't have to learn this, this is on the API (back-end) side)
 const willIGetANewIphone = new Promise(
     (resolve, reject) => {
         if (santaIsGenerous) {
             const smartphone = {
                 brand: 'Apple',
                 type: 'iPhone 11'
             };
             resolve(smartphone);
         } else {
             const withWhatReason = new Error("You've been naughty, no gifts for you");
             reject(withWhatReason);
         }

     }
 );

 // Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
 const askSanta = () => {
     willIGetANewIphone
         .then(function (resolved) {
             // yay, you got a new Iphone
             console.log(resolved);
         })
         .catch(function (error) {
             // whoops, no present from Santa this year...
             console.log(error.message);
         });
 }

 askSanta();

 // Exercise: Practice with Promises
 /*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests 
if the value is less than or greater than the value 10. Log the result to the console.
*/
const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            resolve(number + " is Grater than 10");
        }else {
            reject(number + " is Less than 10");
        }
    });
}

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/
const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every((word) => {
            return typeof word === "string";
        })
        ) {
        resolve(word.map((word) => {
            return word.toUpperCase();
        })
        );
    }else {
        reject("Expected array of strings");
    }
});
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(word.sort());
        }else {
            reject("Expected array of strings");
        }
    });
}

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", "tomatos", "avocado"];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));