//* Modify an Array Stored in an Object

//? Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  let friendsList = userObj.data.friends;
  friendsList.push(friend);
  return friendsList;
  // Only change code above this line
}

console.log(addFriend(user, "Pete"));

/*
let developers = {
  shine: {
    age: 21,
    online: true,
    friends: ["shon", "melvina"],
  },
  shon: {
    age: 19,
    online: true,
  },
};

friendsList = developers.shine.friends;
friendsList.push("sara");
console.log(friendsList);
*/
