//Your task is to return an array where each object will have a new property 'greeting' with the following string value:

//Hi < firstName here >, what do you like the most about < language here >?

//For example, given the following input array:

var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


 // your function should return the following array:

 [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?'
    },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
      greeting: 'Hi Lukas, what do you like the most about Python?'
    },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
      greeting: 'Hi Madison, what do you like the most about Ruby?'
    } 
  ];

//  Notes:

//The order of the properties in the objects does not matter (except in COBOL).
//The input array will always be valid and formatted as in the example above.

function addGreet (){
    for(let i = 0; i < list1.length; i++) {
        list1[i].greeting = `Hi ${list1[i].firstName}, what do you like the most about ${list1[i].language} ?!`;
        console.log(list1[i]);
        }
    }
addGreet();