const users = [
    {
      name: "Олександр",
      balance: 1500,
      friends: ["Марія", "Іван"],
      skills: ["JavaScript", "HTML", "CSS"]
    },
    {
      name: "Марія",
      balance: 2400,
      friends: ["Олександр", "Анна"],
      skills: ["JavaScript", "Python", "React"]
    },
    {
      name: "Іван",
      balance: 3200,
      friends: ["Олександр", "Анна"],
      skills: ["HTML", "CSS", "Node.js"]
    },
    {
      name: "Анна",
      balance: 2100,
      friends: ["Марія", "Іван"],
      skills: ["Python", "Django", "JavaScript"]
    }
];

const totalBalance = users.reduce((acc, user) => acc + user.balance, 0);
console.log(`Загальна сума балансу: ${totalBalance}`); 

const getUsersWithFriend = (friendName) => users
  .filter(user => user.friends.includes(friendName))
  .map(user => user.name);

console.log(getUsersWithFriend("Іван")); 

const sortedByFriendsCount = users
  .sort((a, b) => a.friends.length - b.friends.length)
  .map(user => user.name);

console.log(sortedByFriendsCount); 

const uniqueSkills = [...new Set(users.flatMap(user => user.skills))].sort();
console.log(uniqueSkills); 

