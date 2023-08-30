// console.log('checked');
var users = [];
var user1 = {
    id: 1,
    name: 'AbuKawSar',
    age: 23
};
var user2 = {
    id: 2,
    name: 'AbuKawSar2',
    age: 23
};
users.push(user1);
users.push(user2);
// console.log(users)
var showUserInfo = function (user) {
    console.log("userId = ".concat(user.id));
};
users.forEach(function (user) { return showUserInfo(user); });
