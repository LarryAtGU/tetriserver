const fs = require('fs');


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
const fileName='./users.json';
const readFile=() => {

    try{
        var rawdata = fs.readFileSync(fileName);
    }
    catch (err) {
        saveFile();
    }
    regUsers = JSON.parse(rawdata);

    console.log(regUsers);
    }
    
    let firstCall=true;
    const saveFile=()=> {
    
      fs.writeFile(fileName, JSON.stringify(regUsers), err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
      
    
    }
    
    
var listUser = () => {
    if(firstCall) {
        firstCall=false;
        readFile();
    }
    return regUsers.us.map((u) => u.id );
}
var getUser = (id) => {
    if(firstCall) {
        firstCall=false;
        readFile();
    }

    return regUsers.us.filter((u)=>u.id==id);
}
var updateUser = (id,newInfo) => regUsers.us=regUsers.us.map((u)=>(u.id==id)?(
    Object.keys(u).concat(Object.keys(newInfo)).reduce((accumulator, key) => {
        return {...accumulator, [key]:newInfo.hasOwnProperty(key)?newInfo[key]:u[key]};
      }, {}))
:u);

var loginUser=(email,password) => {
    if(firstCall) {
        firstCall=false;
        readFile();
    }
    u=regUsers.us.find((u)=>u.email==email);
    if(u===undefined) return -1; // email not registered
    if(u.password==password) return u.id; // login successful.
    return -2; // password wrong
}
var addUser=(name, email, password) => {
    if(firstCall) {
        firstCall=false;
        readFile();
    }

    if(regUsers.us.findIndex((u)=>u.email===email)>=0) {
        return -1;
    }
    newId=regUsers.us.reduce((acu,cur)=>cur.id>acu?cur.id:acu,0)+1
        regUsers.us.push({name:name,email:email,password:password,id:newId,
        url:"https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg",
        active:false});
    saveFile();
    return newId;
}

module.exports = {listUser,getUser,updateUser, addUser,loginUser};

