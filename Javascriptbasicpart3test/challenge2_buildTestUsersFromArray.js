//Build Test Users from Arrays
// Write a JavaScript function that receives two arrays: one with names and one with roles.
//  Return a new array of user objects in the format `{ username, email, role }`. 
// The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.

let names = ['Mansi', 'Sharvari','Balaji','Atul','Ziva'];
let roles = ['SuperAdmin','Admin','Operator','Creater'];

function buildTestUsers(names, roles) {

  return names.map((name, index) => {

    const username = name.toLowerCase().replace(/\s+/g, "_");

    return {
      username: username,
      email: `${username}@playwrightbatch.com`,
      role: roles[index] || "User"
    };

  });

}

const users = buildTestUsers(names, roles);
console.log(users);