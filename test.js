var regUsers= {us: [
    {
        id:1, 
        name:"Blue Fish", 
        email:"larrywen@hotmail.com",
        password:"123", 
        url :"https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP-320-80.jpg",
       active:false
    },
    {
        id:2,
        name: "Little Bee",
        email: "test@email.add",
        password: 123,
        url: "https://www.seekpng.com/png/detail/860-8602621_its-me-little-bee-honeybee.png",
        active: false      
    },
]};


var updateUser = (id,newInfo) => regUsers.us=regUsers.us.map((u)=>(u.id==id)?(
    Object.keys(u).concat(Object.keys(newInfo)).reduce((accumulator, key) => {
        return {...accumulator, [key]:newInfo.hasOwnProperty(key)?newInfo[key]:u[key]};
      }, {}))
:u);

console.log(regUsers);
updateUser(1,{"name":"test","lke":1});
console.log(regUsers);