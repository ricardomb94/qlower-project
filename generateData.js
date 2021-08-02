module.exports = function(){
  var faker = require("faker");
  var _= require("loadash")
    return{
      users:_.times(100, function(n){
        return{
          id:n,
          name: faker._name.findName(),
          email: faker.internet.email(),
          phone: faker.internet.phone(),
      }
    })
  }
}





// import { name as _name, internet } from 'faker';

// function generateData () {
//   var users = [];
//   for (var i = 1; i<=50; i++) {
  
//     users.push({
//       id: i,
//       name: _name.findName(),
//       email:internet.email()
//     });
//   }

//   return {users};
// }

// export default generateData;



// import faker  from "faker";

// const database = { users: [] };

// for (let i=1; i<=50; i++) {
//   database.users.push({
//     id: i,
//     name: faker.name.findName(),
//     email:faker.internet.email()
//   });
// }

//console.log(JSON.stringify(database));