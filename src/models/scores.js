const fs = require('fs');
let firstCall=true;
const fileName='./scores.json';

var scores=  [
    {
        rank:1, 
        name:"Blue Fish", 
        score:8000,
    },
    {
        rank:2, 
        name:"Mier", 
        score:7000,
    },
    {
        rank:3, 
        name:"Little Bee", 
        score:6000,
    },

]

const readFile=() => {

    try{
        var rawdata = fs.readFileSync(fileName);
    }
    catch (err) {
        saveFile();
    }
    scores = JSON.parse(rawdata);

    console.log(scores);
}
    
const saveFile=()=> {
    
      fs.writeFile(fileName, JSON.stringify(scores), err => {
        if (err) {
          console.error(err);
        }
      });
    
}
    
    
var getScores = () => {
    if(firstCall) {
        firstCall=false;
        readFile();
    }
    return scores;
}

module.exports = {getScores};

