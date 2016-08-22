/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first
function first(namesArr, cb){
var x = namesArr[0];
cb(x);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for last
function last(namesArr, cb) {
  var x = namesArr[namesArr.length - 1];
  cb(x);
}


last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for multiply

function multiply(num1, num2, cb) {
  var x = num1 * num2;
  cb(x);
}


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains

function contains(namesArr, name, cb) {
  for (var i = 0; i < namesArr.length; i++) {
      if (namesArr[i] === name) {
        var x = true;
      }
      if (namesArr.indexOf(name) === -1) {
        x = false;
      }
  }
  cb(x);
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//Code Here for uniq

function uniq(namesArr, cb) {
  var x = [];
  for (var i = 0; i < namesArr.length; i++) {
    if (x.indexOf(namesArr[i]) === -1) {
      x.push(namesArr[i]);
    }
  }
  cb(x);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//Code Here for each


function each(namesArr, cb) {
  for (var i = 0; i < namesArr.length; i++) {
     cb(namesArr[i], i);
  }
}




each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById

function getUserById(usersArr, userId, cb) {
  for (var i = 0; i < usersArr.length; i++) {
    if (usersArr[i].id === userId) {
    cb(usersArr[i])
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
