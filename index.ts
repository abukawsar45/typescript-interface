// console.log('checked');
let users: {
    id: number;
    name: string;
    age: number;
}[] = []

let user1 = {
  id: 1,
  name: 'AbuKawSar',
  age: 23
}
let user2 = {
  id: 2,
  name: 'AbuKawSar2',
  age: 23
}

users.push(user1);
users.push(user2);
// console.log(users)

const showUserInfo = (user: { id: number; name: string; age: number }) => {
  console.log(`userId = ${user.id}`)
};

users.forEach((user) => showUserInfo(user));