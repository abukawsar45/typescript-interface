// console.log('checked');
interface IUser {
    id: number;
    name: string;
    age: number;
}

let users :IUser[] = []

let user1 :IUser = {
  id: 1,
  name: 'AbuKawSar',
  age: 23,
};
let user2 :IUser = {
  id: 2,
  name: 'AbuKawSar2',
  age: 23
}

users.push(user1);
users.push(user2);
// console.log(users)

const showUserInfo = (user: IUser) => {
  console.log(`userId = ${user.id}`)
};

users.forEach((user) => showUserInfo(user));